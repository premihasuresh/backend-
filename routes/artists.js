const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

// Create a new artist profile
router.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log request body to debug
    const { name, bio, portfolioUrl } = req.body;

    if (!name || !bio) {
      return res.status(400).json({ error: 'Name and bio are required' });
    }

    const artist = new Artist(req.body);
    await artist.save();
    
    res.status(201).json({
      id: artist._id,
      name: artist.name,
      bio: artist.bio,
      portfolioUrl: artist.portfolioUrl,
      portfolio: artist.portfolio
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all artist profiles
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find({});
    const response = artists.map(artist => ({
      id: artist._id,
      name: artist.name,
      bio: artist.bio,
      portfolioUrl: artist.portfolioUrl,
      portfolio: artist.portfolio
    }));
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get artist profile by ID
router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ error: 'Artist not found' });
    res.json({
      id: artist._id,
      name: artist.name,
      bio: artist.bio,
      portfolioUrl: artist.portfolioUrl,
      portfolio: artist.portfolio
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update artist profile by ID
router.put('/:id', async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artist) return res.status(404).json({ error: 'Artist not found' });
    res.json({
      id: artist._id,
      name: artist.name,
      bio: artist.bio,
      portfolioUrl: artist.portfolioUrl,
      portfolio: artist.portfolio
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete artist profile by ID
router.delete('/:id', async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) return res.status(404).json({ error: 'Artist not found' });
    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;