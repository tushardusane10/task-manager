const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
});

module.exports = mongoose.model("task", taskSchema);
