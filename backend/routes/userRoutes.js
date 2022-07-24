const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUserData,
  loginUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get_user_data", protect, getUserData);

module.exports = router;
