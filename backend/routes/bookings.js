const express = require("express");
const router = express.Router();
const twilio = require("twilio");
require("dotenv").config();

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Simulated in-memory storage for testing
// let bookings = []; // Remove this if using MongoDB

// POST - Create Booking and Send SMS
router.post("/", async (req, res) => {
  try {
    console.log("Received booking request:", req.body);
    let { workerName, name, phone, address, date } = req.body;

    // Automatically format customer's phone number
    if (!phone.startsWith("+")) {
      phone = "+91" + phone.replace(/\D/g, ""); // Change to your country code
    }

    const messageBody = `Hello ${name}, your booking for ${workerName} is confirmed!
      - Service Provider: ${workerName}
      - Date: ${date}
      - Address: ${address}
      \nThank you for choosing our service!`;

    await client.messages.create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    // Store booking (Remove if using MongoDB)
    // bookings.push({ workerName, name, phone, address, date });

    res.status(200).json({ message: "Booking confirmed and SMS sent!" });
  } catch (error) {
    console.error("Error in Twilio:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ GET - Fetch All Bookings (Required for /api/bookings)
router.get("/", async (req, res) => {
  res.json(bookings);
});

module.exports = router;
