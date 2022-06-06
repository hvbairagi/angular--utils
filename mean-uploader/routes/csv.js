var express = require("express");
var router = express.Router();
var multer = require("multer");
var Csv = require("../models/Csv");

router.post("/", (req, res) => {
  obj = req.body;
  console.log(body);
});
