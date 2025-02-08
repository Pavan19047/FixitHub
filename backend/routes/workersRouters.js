const express = require("express");
const Electrician = require("../models/Electrician");
const Plumber = require("../models/Plumber");
const Carpenter = require("../models/Carpenter");

const router = express.Router();

// Fetch Electricians
router.get("/electricians", async (req, res) => {
  try {
    const electricians = await Electrician.find();
    res.json(electricians);
  } catch (error) {
    res.status(500).json({ message: "Error fetching electricians", error });
  }
});

// Fetch Plumbers
router.get("/plumbers", async (req, res) => {
  try {
    const plumbers = await Plumber.find();
    res.json(plumbers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plumbers", error });
  }
});

// Fetch Carpenters
router.get("/carpenters", async (req, res) => {
  try {
    const carpenters = await Carpenter.find();
    res.json(carpenters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching carpenters", error });
  }
});

module.exports = router;
