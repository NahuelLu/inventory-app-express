const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryController")


router.get("/categories",categoryController.get_all_categories)

module.exports = router;
