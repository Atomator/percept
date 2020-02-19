var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  dueDate: Date,
  timeDue: String,
  importance: Number
});

module.exports = mongoose.model("Task", TaskSchema);
