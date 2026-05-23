const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ LOGIN API
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    res.send("Login success");
  } else {
    res.send("Invalid credentials");
  }
});

// ✅ AI API
app.post("/api/ai", (req, res) => {
  const { text } = req.body;

  res.json({
    result: `AI Suggestion: Based on "${text}", stay hydrated & consult doctor if needed.`,
  });
});

// ✅ SERVER START
app.listen(5000, () => {
  console.log("🚀 Backend running on http://127.0.0.1:5000");
});