const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const {
  currentUser,
  signup,
  login,
  logout,
  updateProfile,
  resetPassword,
} = require("../controllers/user.controller");

const router = express.Router();

// router.get("/current-user", authenticateUser, currentUser);

// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/logout", authenticateUser, logout);

// router.put("/profile", authenticateUser, updateProfile);
// router.post("/reset-password", resetPassword);

module.exports = router;