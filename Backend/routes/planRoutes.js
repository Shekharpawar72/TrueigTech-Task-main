const express = require("express");
const {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
  getPersonalizedFeed,
} = require("../controllers/planController");

const auth = require("../middlewares/authMiddleware.js");
const { trainerOnly } = require("../middlewares/roleMiddleware.js");

const router = express.Router();

router.get("/", getAllPlans);
router.get("/feed", auth, getPersonalizedFeed);


router.post("/", auth, trainerOnly, createPlan);
router.put("/:id", auth, trainerOnly, updatePlan);
router.delete("/:id", auth, trainerOnly, deletePlan);

module.exports = router;
