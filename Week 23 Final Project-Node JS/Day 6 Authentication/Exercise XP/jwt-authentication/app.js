// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const authenticateJWT = require('./middleware/auth');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Auth routes
app.use('/auth', authRouter);

// Protected route
app.use('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
