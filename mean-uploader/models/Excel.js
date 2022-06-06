var mongoose = require("mongoose");

var CsvSchema = new mongoose.Schema({
  PostingTitle: String,
  : Number,
  phone: Number,
});

module.exports = mongoose.model("Csv", CsvSchema);
