const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

// POST /api/artists - Create a new artist profile
router.post('/', async (req, res) => {
    const { name, bio, portfolioURL } = req.body;

    if (!name || !bio || !portfolioURL) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const newArtist = new Artist({ name, bio, portfolioURL });
        await newArtist.save();
        res.status(201).json({ message: 'Artist profile created successfully', artist: newArtist });
    } catch (error) {
        console.error('Error creating artist profile:', error);
        res.status(500).json({ message: 'Failed to create artist profile', details: error.message });
    }
});

module.exports = router;
