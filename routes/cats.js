var express = require("express");
var router = express.Router();
const Cat = require("../models/cats");

router.get("/", async function (req, res, next) {
  const cats = await Cat.find({});
  console.log(cats);
  res.render("catlist", { cats });
});

router.get("/cat/:id", async function (req, res, next) {
  const cat = await Cat.findById(req.params.id);
  res.render("catdetail", { cat });
});

module.exports = router;
