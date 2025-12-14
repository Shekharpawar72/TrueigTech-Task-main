const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // FRONTEND ORIGIN (exact)
    credentials: true,               // allow cookies / auth headers
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('TrueigTech server is running');
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/plans", require("./routes/planRoutes"));
app.use("/api/subscriptions", require("./routes/subscriptionsRoutes.js"));
app.use("/api/users", require("./routes/userRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});