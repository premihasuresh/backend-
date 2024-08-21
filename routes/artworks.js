const express = require('express');
const ArtworkModel = require('../models/Artwork'); // Adjust the path as necessary

const router = express.Router();

// Define the route to get artworks
router.get('/', async (req, res) => {
    try {
        const artworks = await ArtworkModel.find(); // Fetch all artworks from the database
        res.json(artworks); // Send the artworks as JSON response
    } catch (error) {
        console.error("Error fetching artworks:", error);
        res.status(500).json({ error: "Failed to fetch artworks" });
    }
});

module.exports = router;