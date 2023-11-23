const CategoryModel = require("../models/category")
const asyncHandler = require("express-async-handler");

exports.get_all_categories = asyncHandler(async (req, res, next) => {
    const categories = await CategoryModel.find().exec()
    res.render("category", {
        title: "Categories",
        categories: categories
    })
});