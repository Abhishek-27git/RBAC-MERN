Node.js Role-Based Authentication API

A simple Node.js + Express + MongoDB backend implementing JWT authentication and Role-Based Access Control (RBAC).

🚀 Features:

User Registration & Login

Password Hashing (bcrypt)

JWT Authentication

Role-Based Authorization (admin, manager, user)

Protected Routes with Middleware

📁 Project Structure:
├── index.js
├── config/dbConnect.js
├── models/userModel.js
├── controllers/authController.js
├── middleware/authMiddleware.js
├── routes/authRoutes.js
├── routes/userRoutes.js
└── .env
⚙️ Setup
1️⃣ Install dependencies
npm install
2️⃣ Create .env
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
3️⃣ Start server
npm start

Server runs at:

http://localhost:5000
🔐 API Endpoints
Auth Routes

POST /api/auth/register

POST /api/auth/login

Protected Routes (Require JWT in header)
Authorization: Bearer <token>

GET /api/users/admin → Admin only

GET /api/users/manager → Admin & Manager

GET /api/users/user → All roles

🛡️ How It Works

User registers with hashed password

User logs in and receives JWT

Token is verified via middleware

Access is granted based on user role

📌 Tech Stack

Node.js • Express • MongoDB • Mongoose • JWT • bcrypt • dotenv
