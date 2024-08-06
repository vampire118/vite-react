const express = require('express');
const jwt = require('jsonwebtoken');
const profileController = require('../controllers/profile');

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

// Profile route
router.get('/me', verifyToken, profileController.getProfile);

module.exports = router;
