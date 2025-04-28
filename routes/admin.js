const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'admin123';  // Replace with secure password storage in production

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email, isAdmin: true }, JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
