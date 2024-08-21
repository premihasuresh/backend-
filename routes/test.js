const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');

router.get('/test', auth, (req, res) => {
    res.send('Authenticated');
});

module.exports = router;