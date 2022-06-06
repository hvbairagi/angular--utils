var express = require("express");
var router = express.Router();
var multer = require("multer");
var Gallery = require("../models/Gallery");

//post data
router.post("/", function (req, res, next) {});

// get data by id
router.get("/:id", function (req, res, next) {
  Gallery.findById(req.params.id, function (err, gallery) {
    if (err) return next(err);
    res.json(gallery);
  });
});

module.exports = router;
