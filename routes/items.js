const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

// @route GET /api/items
// @desc Get all items
router.get('/', getItems);

// @route GET /api/items/:id
// @desc Get item by ID
router.get('/:id', getItemById);

// @route POST /api/items
// @desc Add a new item
router.post('/', addItem);

// @route PUT /api/items/:id
// @desc Update item by ID
router.put('/:id', updateItem);

// @route DELETE /api/items/:id
// @desc Delete item by ID
router.delete('/:id', deleteItem);

module.exports = router;