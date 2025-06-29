
# 🔧 FixItHub

FixItHub is a full-stack MERN web application that enables users to **book trusted household workers** (plumbers, electricians, carpenters) and **report public infrastructure issues** with media and location support. It automates booking confirmations using **Twilio SMS**, supports file uploads via **GridFS**, enables **admin resolution management**, and facilitates **community voting** for public problems.

---

## 🚀 Features

### 🧑 Household Repairs
- 📋 Categorized listings: Plumbers, Electricians, Carpenters
- 🧾 Detailed profiles with name, location, rating, contact
- 🗓️ Booking with name, phone, address, date
- 📩 SMS confirmation using Twilio
- 📬 Modal-based responsive booking UI

### 🧱 Public Issue Reporting
- 📝 Report issues with description, category, and location
- 📸 Upload photo proof using GridFS (via Multer middleware)
- 🔄 Track issue status (Open / Resolved)
- 🔼 Vote system to prioritize community needs
- 🧑‍💻 Admin dashboard to resolve & update issues

### 🗣️ User Review (Optional)
- Collect feedback after booking
- Rate and review workers (can be extended)
- Link review collection post-booking

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS Modules
- Font Awesome for icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- GridFS for file/image uploads
- Multer + GridFsStorage for handling files
- Twilio SMS API integration

---

## 🧾 API Endpoints

### 👷 Worker Routes
- `GET /api/plumbers` – fetch all plumbers
- `GET /api/electricians` – fetch all electricians
- `GET /api/carpenters` – fetch all carpenters

### 📅 Booking Routes
- `POST /api/bookings` – confirm and send SMS
- `GET /api/bookings` – retrieve all bookings

### 🚨 Public Issues
- `POST /api/issues` – report issue with optional image
- `GET /api/issues` – fetch all issues
- `PUT /api/issues/:id/vote` – vote an issue up
- `GET /api/reports` – fetch resolved issues

### 📂 File Access
- `GET /api/files/:filename` – serve uploaded image via GridFS

---

## 🔐 .env File Configuration

Create a `.env` file in the backend root with the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/fixithub
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_registered_number
```

---

## 🛠️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/fixithub.git
```

### 2. Backend Setup
```bash
cd fixithub/backend
npm install
npm start
```

### 3. Frontend Setup
```bash
cd fixithub/frontend
npm install
npm run dev
```

---

## 🧪 Seed the Database (Optional)

To populate 100 dummy workers per category (plumber, electrician, carpenter):

```bash
node seed.js
```

> Uses `@faker-js/faker` to generate names, ratings, locations, contacts.

---

## 🎯 Project Goals

To simplify and digitize local problem-solving by connecting citizens with repair professionals and civic authorities. FixItHub empowers residents to take quick action through a centralized, transparent and reliable platform.

---

## ❓ Problem Statement

Unified platform to solve local repair & public issues efficiently and transparently.

---

## 📈 Future Scope

- 🌍 Live GPS map of issues
- 🧑‍🔧 Worker login + reviews
- 📱 Mobile app with push notifications
- 🗳️ Public voting leaderboard
- 🎯 Admin analytics and heatmap zones

---

## 🤝 Contributors

- **Developer:** Pavan K
- **Contact:** pavandimpu1234@gmail.com

---

## 📝 License

MIT License © 2025 FixItHub
