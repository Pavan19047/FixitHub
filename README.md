# 🔧 FixItHub

FixItHub is a full-stack web application built to simplify household repair bookings and public issue reporting. The platform connects users with trusted workers like plumbers, electricians, and carpenters, and allows users to report civic issues like potholes, streetlight failures, etc. It includes SMS notifications, file uploads (via GridFS), voting for public issues, admin dashboards, and more.

---

## 🚀 Features

### ✅ Household Repair Services
- View categorized workers: Plumber, Electrician, Carpenter
- View worker details: Name, location, rating, contact
- Book a worker with required details (name, address, phone, date)
- Confirmation message sent via **Twilio SMS**

### ✅ Public Issue Reporting
- Upload civic issues like garbage, water leakage, road issues
- Attach image files (via multer & GridFS)
- Status tracking: Open / Resolved
- Voting system for issue prioritization
- Admin dashboard to mark issues as resolved

### ✅ Reviews (Optional Module)
- Leave a review after a service booking
- Manage worker feedback
- Display community ratings

---

## 📚 Tech Stack

### 🖥 Frontend
- React.js
- React Router DOM
- Axios
- Font Awesome Icons
- CSS Modules

### 🌐 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- GridFS for file storage
- Twilio for SMS booking confirmations

---

## 🔁 API Endpoints

### 🧑‍🔧 Worker APIs
- `GET /api/plumbers`
- `GET /api/electricians`
- `GET /api/carpenters`

### 📅 Booking APIs
- `POST /api/bookings` — book a worker & send SMS
- `GET /api/bookings` — fetch all bookings

### 🚧 Issue Reporting APIs
- `POST /api/issues` — report a new public issue (with file upload)
- `GET /api/issues` — get all issues
- `PUT /api/issues/:id/vote` — upvote an issue
- `GET /api/reports` — get resolved issues

### 📂 File Access
- `GET /api/files/:filename` — fetch uploaded image by filename

---

## 🔒 .env File (Required)

