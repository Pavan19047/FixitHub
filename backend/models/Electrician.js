const mongoose = require("mongoose");

const ElectricianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: 0 },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Electrician", ElectricianSchema, "electricians");
