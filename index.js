 const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authroutes");
const userRoutes =require("./routes/userRoutes");

// connect to database
dbConnect();

const app = express();

// middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);

//Start the server
const PORT = process.env.PORT ||7000;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});
