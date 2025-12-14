const User = require("../models/userModel.js");

// FOLLOW / UNFOLLOW
exports.toggleFollowTrainer = async (req, res) => {
  const user = await User.findById(req.user.id);
  const trainerId = req.params.trainerId;

  const index = user.followedTrainers.indexOf(trainerId);

  if (index === -1) {
    user.followedTrainers.push(trainerId);
    await user.save();
    return res.json({ message: "Trainer followed" });
  } else {
    user.followedTrainers.splice(index, 1);
    await user.save();
    return res.json({ message: "Trainer unfollowed" });
  }
};


// GET CURRENT USER (FOR FOLLOWED TRAINERS)
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
