const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const bodyParser = require('body-parser')
const path = require('path')
const crypto = require('crypto')

const app = express()
app.use(bodyParser.json())

// Mongo URI
const mongoURI = 'mongodb://localhost:27017/fixithub'

// Create mongo connection
const conn = mongoose.createConnection(mongoURI)

// Init gfs
let gfs
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
})

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = buf.toString('hex') + path.extname(file.originalname)
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        }
        resolve(fileInfo)
      })
    })
  }
})
const upload = multer({ storage })

// Routes
app.post('/api/issues', upload.single('file'), (req, res) => {
  const { description, issueType, location } = req.body
  const newIssue = {
    description,
    issueType,
    location,
    file: req.file ? req.file.filename : null,
    originalFileName: req.file ? req.file.originalname : null,
    status: 'open',
    votes: 0
  }
  // Save newIssue to MongoDB
  // ...existing code to save issue...
  res.json(newIssue)
})

app.get('/api/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      })
    }
    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    } else {
      res.status(404).json({
        err: 'Not an image'
      })
    }
  })
})

// ...existing code...
