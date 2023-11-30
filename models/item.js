const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type:String, required:true},
  description: String,
  category: { type: Schema.Types.ObjectId, ref: "categories", required:true},
  price : {type:Number, required:true},
  number_in_stock: {type:Number, required:true},
  img: String
});
itemSchema.virtual("url").get(function(){
    return `/inventory/item/${this._id}`;
})
itemSchema.virtual("url_image").get(function(){
  return `/images/items/${this.img}`;
})
const Item = mongoose.model("items", itemSchema);

module.exports = Item
