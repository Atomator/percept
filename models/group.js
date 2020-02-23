var mongoose = require("mongoose");

var GroupSchema = new mongoose.Schema({
  user: [],
  project: String,
  maxSiz: Number
});

module.exports = mongoose.model("Group", GroupSchema);
