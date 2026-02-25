# RBAC-MERN
Features:
✅ User Registration (hashed passwords using bcrypt)
✅ User Login with JWT Token generation
✅ Role-Based Authorization (Admin, Manager, User)
✅ Protected Routes using Middleware
✅ MongoDB with Mongoose
✅ Clean MVC-style structure
✅ Environment variable configuration

Project Structure:

├── index.js                 # Entry point
├── config/
│   └── dbConnect.js         # MongoDB connection
├── models/
│   └── userModel.js         # User schema
├── controllers/
│   └── authController.js    # Register & Login logic
├── middleware/
│   └── authMiddleware.js    # JWT verification & Role authorization
├── routes/
│   ├── authRoutes.js        # /api/auth routes
│   └── userRoutes.js        # Protected routes
└── .env                     # Environment variables

⚙️ Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

dotenv

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install dependencies
npm install
3️⃣ Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start the server
npm start

Server runs at:

http://localhost:5000
🔐 Authentication Flow
📝 Register

POST /api/auth/register

{
  "username": "john",
  "password": "123456",
  "role": "user"
}
🔑 Login

POST /api/auth/login

{
  "username": "john",
  "password": "123456"
}

Response:

{
  "token": "your_jwt_token"
}
🛡️ Protected Routes

All protected routes require:

Authorization: Bearer <token>
👑 Admin Route

GET /api/users/admin

Accessible only by:

admin

📊 Manager Route

GET /api/users/manager

Accessible by:

admin

manager

👤 User Route

GET /api/users/user

Accessible by:

admin

manager

user

🔒 Middleware Explanation
verifyToken

Extracts JWT from Authorization header

Verifies token using secret key

Attaches decoded user info to request

authorizeRoles

Checks if user role matches allowed roles

Returns 403 if unauthorized

🗄️ Database Schema
User Model
{
  username: String,
  password: String,
  role: "admin" | "manager" | "user"
}

Includes automatic:

createdAt

updatedAt

🧠 How Role-Based Access Works

User logs in

Server generates JWT containing:

User ID

User Role

Client sends token in headers

Middleware:

Verifies token

Checks role

Grants or denies access

📌 Security Best Practices Implemented

Password hashing using bcrypt

JWT stored securely (recommended: HttpOnly cookies in production)

Environment variables for sensitive data

Role validation before route access

🛠️ Future Improvements

Refresh Tokens

Email verification

Password reset feature

Rate limiting

Input validation (Joi or express-validator)

Docker support

Unit testing
