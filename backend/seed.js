const Electrician = require("./models/Electrician");
const Plumber = require("./models/Plumber");
const Carpenter = require("./models/Carpenter");

const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed Data
const seedDatabase = async () => {
  try {
    await Electrician.create([
      { name: "John Doe", location: "Seoul", rating: 4.5, contact: "123-456-7890" },
      { name: "Jane Smith", location: "Busan", rating: 4.7, contact: "987-654-3210" }
    ]);

    await Plumber.create([
      { name: "Alex Kim", location: "Seoul", rating: 4.2, contact: "555-111-2222" }
    ]);

    await Carpenter.create([
      { name: "Michael Lee", location: "Incheon", rating: 4.8, contact: "777-333-4444" }
    ]);

    console.log("Database seeded successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.disconnect();
  }
};

seedDatabase();
