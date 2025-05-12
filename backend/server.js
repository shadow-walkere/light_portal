const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "light_academy",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// Test route
app.get("/api/signup", (req, res) => {
  res.status(200).send("Signup route is working, but use POST to register.");
});

// POST route for signup
app.post(
  "/api/signup",
  [
    body("username").isLength({ min: 3 }).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 8 }),
    body("form_level").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, form_level } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Check if email already exists
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {
          if (err) return res.status(500).json({ error: "Database error" });

          if (results.length > 0) {
            return res.status(409).json({ message: "Email already exists" });
          }

          // Insert new user
          db.query(
            "INSERT INTO users (username, email, password, form_level) VALUES (?, ?, ?, ?)",
            [username, email, hashedPassword, form_level],
            (err, result) => {
              if (err) return res.status(500).json({ error: err.message });

              const userId = result.insertId;

              const token = jwt.sign(
                { user_id: userId, email },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
              );

              res.status(201).json({ message: "Signup successful", token });
            }
          );
        }
      );
    } catch (err) {
      console.error("Server error:", err.message);
      res.status(500).json({ error: "Server error" });
    }
  }
);

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  db.query(
    "SELECT user_id, password FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });

      if (result.length === 0)
        return res.status(401).json({ message: "User not found" });

      const user = result[0];

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: "Server error" });

        if (!isMatch)
          return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign(
          { user_id: user.user_id },
          process.env.JWT_SECRET || "secretkey",
          { expiresIn: "1h" }
        );

        res.status(200).json({
          message: "Login successful",
          token,
          user_id: user.user_id,
        });
      });
    }
  );
});

// Get All Users
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Get Single User by ID
app.get("/api/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  db.query("SELECT * FROM users WHERE user_id = ?", [userId], (err, result) => {
    if (err || result.length === 0)
      return res.status(404).json({ error: "User not found" });

    res.status(200).json(result[0]);
  });
});

// Update a User
app.put("/api/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  db.query(
    "UPDATE users SET ? WHERE user_id = ?",
    [req.body, userId],
    (err, results) => {
      if (err || results.affectedRows === 0) {
        return res
          .status(404)
          .json({ error: "User not found or no changes made" });
      }
      res.status(200).json({ message: "User updated successfully" });
    }
  );
});

// Delete a User
app.delete("/api/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  db.query("DELETE FROM users WHERE user_id = ?", [userId], (err, results) => {
    if (err || results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  });
});

// router.get("/api/profile", authenticateToken, (req, res) => {
//   const { email } = req.user;

//   const query = "SELECT username, email, form_level FROM users WHERE email = ?";
//   db.query(query, [email], (err, results) => {
//     if (err) return res.status(500).json({ error: "Database error" });

//     if (results.length === 0)
//       return res.status(404).json({ message: "User not found" });

//     res.json(results[0]);
//   });
// });

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
