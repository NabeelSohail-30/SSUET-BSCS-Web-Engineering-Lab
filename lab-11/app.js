// app.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection setup (replace with your MongoDB Atlas connection string)
mongoose.connect("conn-str", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple route for the student profile page
app.get("/student", (req, res) => {
  res.json({ name: "John Doe", age: 20, major: "Computer Science" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing
