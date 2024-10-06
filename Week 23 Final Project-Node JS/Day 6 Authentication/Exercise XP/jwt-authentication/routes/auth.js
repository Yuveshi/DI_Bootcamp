// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User data (in-memory for simplicity)
const users = [];

// Registration endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  // Generate JWT
  const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });

  // Send the token to the client
  res.json({ token });
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    // Generate JWT
    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send the token to the client
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;

