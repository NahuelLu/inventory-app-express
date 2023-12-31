const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryController")


router.get("/categories",categoryController.get_all_categories)
router.get("/create",categoryController.category_create_get)
router.post("/create",categoryController.category_create_post)
router.get("/:id/update",categoryController.category_update_get)
router.post("/:id/update",categoryController.category_update_post)
router.get("/:id/delete",categoryController.category_delete_get)
router.post("/:id/delete",categoryController.category_delete_post)
router.get("/:id",categoryController.category_detail_get)

module.exports = router;
