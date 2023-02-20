const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a name"],
  },
  section: {
    type: String,
    required: [true, "Please provide a section"],
  },
  date: {
    type: Date,
    required: [true, "Please provide a date"],
  },
  url: {
    type: String,
    required: [true, "Please provide a url"],
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
