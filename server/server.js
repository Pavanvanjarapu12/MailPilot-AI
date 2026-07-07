const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ================= Routes =================

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 MailPilot AI Backend is Running",
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// ==========================================

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});