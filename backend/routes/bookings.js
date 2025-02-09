const express = require("express");
const router = express.Router();
const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

router.post("/", async (req, res) => {
  try {
    console.log("Received booking request:", req.body);

    let { workerName, name, phone, address, date } = req.body;

    // Automatically format customer's phone number
    if (!phone.startsWith("+")) {
      phone = "+1" + phone.replace(/\D/g, "");  // Change +1 to your country code if needed
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

    res.status(200).json({ message: "Booking confirmed and SMS sent to the customer!" });
  } catch (error) {
    console.error("Error in Twilio:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
