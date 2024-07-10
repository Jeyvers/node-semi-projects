const mongoose = require("mongoose");

// defines structure
const TaskSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Must provide name"],
  trim: true,
  // maxlength: [20, "Name can not be more than 20 characters"],
 },
 completed: {
  type: Boolean,
  default: false,
 },
});

// provides an interface to the database
module.exports = mongoose.model("Task", TaskSchema);
