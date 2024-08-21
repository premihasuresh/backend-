const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // Assuming you have a Cart model

// Add item to cart
router.post('/add', async (req, res) => {
  const { productId, imageUrl, quantity } = req.body;

  try {
    const newCartItem = new Cart({
      productId,
      imageUrl,
      quantity,
    });
    await newCartItem.save();
    res.status(200).json(newCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

module.exports = router;