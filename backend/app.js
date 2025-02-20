const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
require("dotenv").config();

// Import Models
const Booking = require("./models/Booking");
const Plumber = require("./models/Plumber");
const Electrician = require("./models/Electrician");
const Carpenter = require("./models/Carpenter");

// Import Routes
const bookingRoutes = require("./routes/bookings");
const issueRoutes = require("./routes/issues");

// Initialize Express
const app = express();
app.use(bodyParser.json());

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/fixithub";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Initialize GridFS
let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// ✅ Multer Storage (GridFS)
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) =>
    new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);
        const filename = buf.toString("hex") + path.extname(file.originalname);
        resolve({ filename, bucketName: "uploads" });
      });
    }),
});
const upload = multer({ storage });

// ✅ Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/issues", issueRoutes);

// ✅ Upload File with Issue
app.post("/api/issues", upload.single("file"), (req, res) => {
  const { description, issueType, location } = req.body;
  const newIssue = {
    description,
    issueType,
    location,
    file: req.file ? req.file.filename : null,
    originalFileName: req.file ? req.file.originalname : null,
    status: "open",
    votes: 0,
  };
  // Save to MongoDB (To be implemented)
  res.json(newIssue);
});

// ✅ Serve Uploaded Files
app.get("/api/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "No file exists" });
    }
    // Check if image
    if (file.contentType.startsWith("image/")) {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({ err: "Not an image" });
    }
  });
});

// ✅ Fetch Plumbers
app.get("/api/plumbers", async (req, res) => {
  try {
    const plumbers = await Plumber.find();
    res.json(plumbers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plumbers", error });
  }
});

// ✅ Fetch Electricians
app.get("/api/electricians", async (req, res) => {
  try {
    const electricians = await Electrician.find();
    res.json(electricians);
  } catch (error) {
    res.status(500).json({ message: "Error fetching electricians", error });
  }
});

// ✅ Fetch Carpenters
app.get("/api/carpenters", async (req, res) => {
  try {
    const carpenters = await Carpenter.find();
    res.json(carpenters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching carpenters", error });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
