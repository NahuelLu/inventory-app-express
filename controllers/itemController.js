const ItemModel = require("../models/item")
const asyncHandler = require("express-async-handler");

exports.get_all_items = asyncHandler(async (req, res, next) => {
    const items = await ItemModel.find().exec()
    res.render("items", {
        title: "Items",
        items: items
    })
});