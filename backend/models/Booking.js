const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  workerName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
