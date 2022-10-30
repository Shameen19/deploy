var express = require("express");

var router = express.Router();

router.get("/", function (req, res, next) {
  var name = "Abc He";
  res.render(__dirname + "/views/index.html", { name: name });
});

module.exports = router;
