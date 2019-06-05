var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("vProducts/all");
});

router.get("/all", (req, res) => {
  res.render("vProducts/all");
});

module.exports = router;
