const express = require("express");
const { verifyToken, authorizeRoles } = require("../middlewares/authmiddleware");
const router = express.Router();

// only admin
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// admin + manager
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
  res.json({ message: "Welcome Manager" });
});

// all authenticated roles
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports = router;
