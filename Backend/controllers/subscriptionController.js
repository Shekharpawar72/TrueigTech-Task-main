const Subscription = require("../models/subscriptionModel.js");

// SUBSCRIBE (simulate payment)
exports.subscribe = async (req, res) => {
  const { planId } = req.body;

  const exists = await Subscription.findOne({
    userId: req.user.id,
    planId,
  });

  if (exists) {
    return res.status(400).json({ message: "Already subscribed" });
  }

  const sub = await Subscription.create({
    userId: req.user.id,
    planId,
  });

  res.status(201).json(sub);
};

// CHECK SUBSCRIPTION
exports.checkSubscription = async (req, res) => {
  const sub = await Subscription.findOne({
    userId: req.user.id,
    planId: req.params.planId,
  });

  res.json({ subscribed: !!sub });
};
