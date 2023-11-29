const ItemModel = require("../models/item")
const asyncHandler = require("express-async-handler");
const CategoryModel = require("../models/category")
const get_all_items = asyncHandler(async (req, res, next) => {
    const items = await ItemModel.find().exec()
    res.render("items", {
        title: "Items",
        items: items
    })
});

const item_create_get = (req, res, next) => {
}
const item_create_post = [
    asyncHandler(async (req, res, next) => {
})
]
const item_update_get = asyncHandler(async (req, res, next) => {
});
const item_update_post = [
    asyncHandler(async (req, res, next) => {
})
]
const item_delete_get = asyncHandler(async (req, res, next) => {
});
const item_delete_post = asyncHandler(async (req, res, next) => {
});
const item_get_details = asyncHandler(async (req, res, next) => {
    const item = await ItemModel.findById(req.params.id).populate('category').exec()
    if(!item){
        res.render("item_error",{
            title: "This item doesn't exists",
        })
    }else{
        res.render("item_detail",{
            title: item.name + " detail",
            item
        })
    }
});


const itemController = {
    get_all_items,
    item_create_get,
    item_create_post,
    item_update_get,
    item_update_post,
    item_delete_get,
    item_delete_post,
    item_get_details
}
module.exports = itemController