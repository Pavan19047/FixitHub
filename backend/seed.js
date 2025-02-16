const Electrician = require('./models/Electrician')
const Plumber = require('./models/Plumber')
const Carpenter = require('./models/Carpenter')

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const locations = [
  'Seoul',
  'Busan',
  'Incheon',
  'Daegu',
  'Daejeon',
  'Gwangju',
  'Ulsan',
  'Suwon'
]
const names = [
  'John Doe',
  'Jane Smith',
  'Alex Kim',
  'Michael Lee',
  'Chris Park',
  'David Choi',
  'Sung Min',
  'Eun Ji'
]

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)]
const getRandomRating = () => (Math.random() * (5 - 3.5) + 3.5).toFixed(1)
const getRandomContact = () =>
  `${Math.floor(100 + Math.random() * 900)}-${Math.floor(
    100 + Math.random() * 900
  )}-${Math.floor(1000 + Math.random() * 9000)}`

const generateWorkers = count => {
  return Array.from({ length: count }, () => ({
    name: getRandomElement(names),
    location: getRandomElement(locations),
    rating: parseFloat(getRandomRating()),
    contact: getRandomContact()
  }))
}

const seedDatabase = async () => {
  try {
    await Electrician.insertMany(generateWorkers(100))
    await Plumber.insertMany(generateWorkers(100))
    await Carpenter.insertMany(generateWorkers(100))

    console.log('Database seeded successfully with 100 workers per category!')
    mongoose.disconnect()
  } catch (error) {
    console.error('Error seeding database:', error)
    mongoose.disconnect()
  }
}

seedDatabase()
