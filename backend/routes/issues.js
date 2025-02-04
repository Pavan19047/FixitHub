const express = require("express");
const Issue = require("../models/Issue");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id/vote", async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, { $inc: { votes: 1 } }, { new: true });
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
