const express = require('express');
const router = express.Router();
const categoryRouter = require("./categoryRouter")
const itemRouter = require("./itemRouter")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("inventory",{
    title: "Inventory"
  })
});
router.use("/category",categoryRouter)
router.use("/item",itemRouter)


module.exports = router;
