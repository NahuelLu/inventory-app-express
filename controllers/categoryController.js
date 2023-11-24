const CategoryModel = require("../models/category")
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const get_all_categories = asyncHandler(async (req, res, next) => {
    const categories = await CategoryModel.find().exec()
    res.render("category", {
        title: "Categories",
        categories: categories
    })
});
const category_create_get =  (req, res, next) => {
    res.render("category_form",{
        title: "Create a category"
    })
}
const category_create_post =[
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        const category = new CategoryModel({ name: req.body.name , description: req.body.description});

        if (!errors.isEmpty()) {
            res.render("category_form",{
                title: "Category Form",
                category,
                errors: errors.array()
            })
          } else {
            await category.save()
            res.redirect(category.url)
        }
    })
]
 
const category_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT implemented to update this category with ID:"+req.params.id+",GET")
})
const category_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT implemented to update this category with ID:"+req.params.id+", POST")
}) 
const category_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT implemented to delete a category GET")
})
const category_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT implemented to delete a category POST")
}) 
const category_detail_get = asyncHandler(async (req, res, next) => {
    const category = await CategoryModel.findById(req.params.id).exec()
    if(!category){
        res.render("category_error",{
            title: "This category doesn't exists",
        })
    }else{
        res.render("category_detail",{
            title: category.name + "detail",
            category
        })
    }
}) 








//Category' Controllers
const CategoryController = {
    get_all_categories,
    category_create_get,
    category_create_post,
    category_update_get,
    category_update_post,
    category_delete_get,
    category_delete_post,
    category_detail_get
}

module.exports = CategoryController


