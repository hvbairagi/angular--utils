var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  const obj = req.body;
  console.log(req.body);
  res.send({ message: "hello" });
});

module.exports = router;
