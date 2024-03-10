const express = require("express");
const router = express.Router();
const Cat = require("../models/cats");

router.get("/list", async function (req, res, next) {
  const cats = await Cat.find({}).populate('categories');
  res.render("catlist", { cats });
});

router.get("/grid", async function (req, res, next) {
  const cats = await Cat.find({}).populate('categories');
  res.render("catgrid", { cats });
});

router.get("/id/:id", async function (req, res, next) {
  const cat = await Cat.findById(req.params.id).populate('categories');
  res.render("catdetail", { cat });
});

module.exports = router;
