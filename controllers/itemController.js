const ItemModel = require("../models/item")
const asyncHandler = require("express-async-handler");
const CategoryModel = require("../models/category")
const { body, validationResult } = require("express-validator");

const get_all_items = asyncHandler(async (req, res, next) => {
    const items = await ItemModel.find().exec()
    res.render("items", {
        title: "Items",
        items: items
    })
});

const item_create_get = asyncHandler(async (req, res, next) => {
    const categories = await CategoryModel.find().exec()
    res.render("item_form",{
        title: "Create an item",
        categories
    })
});


const item_create_post = [
    body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("description", "Description must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("category", "Category must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("price", "Price must not be empty").trim().isLength({ min: 1 }).escape(),
    body("stock", "Stock must not be empty").trim().isLength({ min: 1 }).escape(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)
        const item = new ItemModel({ name: req.body.name , description: req.body.description,category: req.body.category,price: req.body.price, number_in_stock: req.body.stock})
        if(!errors.isEmpty()){
            const categories = await CategoryModel.find().exec()
            res.render("item_form",{
                title: "Create an item",
                categories,
                errors,
                item
            })
        }else{
            await item.save()
            res.redirect(item.url)
        }
    })
]
const item_update_get = asyncHandler(async (req, res) => {
    const item = await ItemModel.findById(req.params.id).exec()
    const categories = await CategoryModel.find().exec()
    res.render("item_form",{
        title: "Update Item",
        categories,
        item
    })
});
const item_update_post = [
    body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("description", "Description must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("category", "Category must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("price", "Price must not be empty").trim().isLength({ min: 1 }).escape(),
    body("stock", "Stock must not be empty").trim().isLength({ min: 1 }).escape(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)
        const item = new ItemModel({ 
            name: req.body.name , 
            description: req.body.description,
            category: req.body.category,
            price: req.body.price, 
            number_in_stock: req.body.stock,
            _id: req.params.id
        })
        if(!errors.isEmpty()){
            const categories = await CategoryModel.find().exec()
            res.render("item_form",{
                title: "Update Item",
                categories,
                item,
                errors
            })
        }else{
            const itemUpdated = await ItemModel.findByIdAndUpdate(req.params.id,item).exec()
            res.redirect(itemUpdated.url)
        }

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