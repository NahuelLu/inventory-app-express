const express = require('express');
const router = express.Router();
const itemController = require("../controllers/itemController")

router.get("/items",itemController.get_all_items)

module.exports = router;
