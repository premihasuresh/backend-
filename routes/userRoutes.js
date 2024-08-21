const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;