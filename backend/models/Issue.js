const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  description: { type: String, required: true },
  issueType: { type: String, required: true },
  location: { type: String, required: true },
  file: { type: String },
  votes: { type: Number, default: 0 },
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Issue", IssueSchema, "issues"); // "issues" collection
