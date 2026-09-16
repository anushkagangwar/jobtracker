# 💼 JobTracker — Job Application Management Platform

JobTracker is a full-stack web application designed to help users **manage, track, and organize their job applications** in one place. It allows users to maintain application details, monitor application status, and keep their job search organized.

## 🚀 Features

* 🔐 **User Authentication** — Secure registration and login
* 📝 **Add Job Applications** — Store company, role, location, and application details
* 📊 **Application Tracking** — Track applications through different stages
* 🔄 **Update Application Status** — Easily update the status of an application
* 🗑️ **Delete Applications** — Remove applications when they are no longer needed
* 🔎 **Job Application Overview** — View all applications in one dashboard
* 📱 **Responsive UI** — Works across desktop and mobile screen sizes
* 🗄️ **Persistent Database** — Job application data is stored in MongoDB

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* bcrypt

### Database

* MongoDB
* Mongoose

### Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas

## 🏗️ Project Architecture

```text
                    JobTracker
                        │
              ┌─────────┴─────────┐
              │                   │
        React Frontend       Express Backend
              │                   │
           Axios              REST APIs
              │                   │
              └─────────┬─────────┘
                        │
                    Mongoose
                        │
                    MongoDB
```

## 🔄 Application Flow

```text
User
 ↓
React Frontend
 ↓
Axios Request
 ↓
Express.js API
 ↓
Controller
 ↓
Mongoose
 ↓
MongoDB
 ↓
Response
 ↓
React UI
```

## 📌 Job Application Status

The application can be organized according to different stages, such as:

```text
Applied
   ↓
Under Review
   ↓
Interview
   ↓
Selected / Rejected
```

This makes it easier to understand the current state of each application.

## 🔐 Authentication

JobTracker uses secure authentication mechanisms:

* JWT for user authentication
* bcrypt for password hashing
* Protected API routes for authenticated users

Passwords are never stored directly in plain text.

## 📂 Project Structure

```text
JobTracker/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

> Adjust the folder names above if your actual repository structure is different.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd JobTracker
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

```bash
cd ../backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never upload your `.env` file or secret keys to GitHub.

### 6. Start the backend

```bash
npm start
```

### 7. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

## 🎯 Key Learning Outcomes

Through this project, I worked with:

* Full-stack application development
* React component-based architecture
* REST API development
* CRUD operations
* MongoDB database management
* Mongoose models and schemas
* JWT authentication
* Password hashing with bcrypt
* Frontend-backend communication using Axios
* Deployment of full-stack applications

## 🔮 Future Improvements

Possible future features include:

* 📧 Email reminders for application follow-ups
* 📅 Interview scheduling
* 📈 Application analytics and statistics
* 🔔 Automated application reminders
* 📄 Resume management
* 🤖 AI-powered job and resume recommendations
* 🔗 Job portal integration

## 👩‍💻 Author

**Anushka Gangwar**

B.Tech Computer Science & Engineering

Interested in **Full Stack Development, MERN Stack, and Software Development**.

---

⭐ If you find this project useful, consider giving it a star!
