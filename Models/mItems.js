const mongoose = require("mongoose");

const mItemSchema = new mongoose.Schema({
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

module.exports = mongoose.model("mItems", mItemSchema);
