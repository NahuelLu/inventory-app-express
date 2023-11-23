const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type:String, required:true},
  description: String,
  category: { type: Schema.Types.ObjectId, ref: "Category", required:true},
  price : {type:Number, required:true},
  number_in_stock: {type:Number, required:true}
});
itemSchema.virtual("url").get(function(){
    return `/inventory/item/${this._id}`;
})
const Item = mongoose.model("items", itemSchema);

module.exports = Item
