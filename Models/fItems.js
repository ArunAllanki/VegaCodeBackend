const mongoose = require("mongoose");

const fItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  units: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("fItems", fItemSchema);
