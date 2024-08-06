const express = require('express');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/auth');

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = decoded;
    next();
  });
};

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Update user route
router.put('/update', verifyToken, authController.updateUser);

router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
