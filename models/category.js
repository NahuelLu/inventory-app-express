const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {type:String, required:true},
  description: String
}
);
categorySchema.virtual("url").get(function(){
    return `/inventory/category/${this._id}`;
})
const Category = mongoose.model("categories", categorySchema);

module.exports = Category
