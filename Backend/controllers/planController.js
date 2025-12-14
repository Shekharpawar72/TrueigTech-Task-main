const Plan = require("../models/planmodel.js");

// CREATE PLAN (Trainer Only)
exports.createPlan = async (req, res) => {
  try {
    const plan = await Plan.create({
      ...req.body,
      trainerId: req.user.id,
    });
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PLANS (Public)
exports.getAllPlans = async (req, res) => {
  const plans = await Plan.find().populate("trainerId", "name");
  res.json(plans);
};

// UPDATE PLAN (Trainer Own Only)
exports.updatePlan = async (req, res) => {
  const plan = await Plan.findById(req.params.id);

  if (!plan || plan.trainerId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  const updated = await Plan.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

// DELETE PLAN
exports.deletePlan = async (req, res) => {
  const plan = await Plan.findById(req.params.id);

  if (!plan || plan.trainerId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await plan.deleteOne();
  res.json({ message: "Plan deleted" });
};

exports.getPersonalizedFeed = async (req, res) => {
  const user = await require("../models/User").findById(req.user.id);

  const plans = await require("../models/Plan").find({
    trainerId: { $in: user.followedTrainers },
  });

  res.json(plans);
};
