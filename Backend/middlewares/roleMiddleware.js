const trainerOnly = (req, res, next) => {
  if (req.user.role !== "trainer") {
    return res.status(403).json({
      message: "Access denied. Trainers only.",
    });
  }
  next();
};

module.exports = { trainerOnly };
