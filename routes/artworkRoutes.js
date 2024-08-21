const express = require('express');
const { getArtworks, addArtwork, updateArtwork, deleteArtwork } = require('../controllers/artworkController');
const { auth, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getArtworks);
router.post('/', auth, admin, addArtwork);
router.put('/:id', auth, admin, updateArtwork);
router.delete('/:id', auth, admin, deleteArtwork);

module.exports = router;