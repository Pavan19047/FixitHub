const mongoose = require("mongoose");

const PlumberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Plumber", PlumberSchema, "plumbers");
