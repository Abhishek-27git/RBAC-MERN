const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const register =async(req,res) =>{
    try{
    const {username, password,role} = req.body;
    const hasedPassword = await bcrypt.hash(password,10);

    const newUser = new User ({
        username :username ,
        password : hasedPassword,
        role : role,
    })
    await newUser.save();
    res.status(201).json({message:`User registered with username ${username}`});
}
catch(err){
        res.status(500).json({message:`Something is wrong `});
}
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password with hashed one
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },  // ✅ Corrected
      process.env.JWT_SECRET,
      { expiresIn: "1h" }                 // ✅ Corrected
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = {
    register,
    login,
};
 