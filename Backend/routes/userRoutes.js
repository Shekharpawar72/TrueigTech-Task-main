const express = require("express");
const { toggleFollowTrainer , getMe } = require("../controllers/userController");

const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/follow/:trainerId", auth, toggleFollowTrainer);
router.get("/me", auth, getMe);

module.exports = router;
