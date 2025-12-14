const express = require("express");
const {
  subscribe,
  checkSubscription,
} = require("../controllers/subscriptionController");

const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/", auth, subscribe);
router.get("/:planId", auth, checkSubscription);

module.exports = router;
