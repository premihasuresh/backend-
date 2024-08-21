const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Request body:', req.body); // Log the request body

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          console.error('JWT error:', err); // Log JWT errors
          return res.status(500).json({ message: 'Error generating token' });
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Server error:', err); // Log server errors
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;