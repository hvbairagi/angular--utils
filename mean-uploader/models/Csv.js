var mongoose = require("mongoose");

var CsvSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: Number,
});

module.exports = mongoose.model("Csv", CsvSchema);
