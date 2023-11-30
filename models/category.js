const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {type:String, required:true},
  description: String,
  img: String
}
);
categorySchema.virtual("url").get(function(){
    return `/inventory/category/${this._id}`;
})
categorySchema.virtual("url_image").get(function(){
  return `/images/category/${this.img}`;
})
const Category = mongoose.model("categories", categorySchema);

module.exports = Category
