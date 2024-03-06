var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("cats will be displayed here");
});

module.exports = router;
