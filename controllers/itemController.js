const Item = require('../models/Item');

// @desc Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get item by ID
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Add a new item
const addItem = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const newItem = new Item({
    name,
    description,
    price,
    imageUrl
  });

  try {
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Update item by ID
const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.price = req.body.price || item.price;
    item.imageUrl = req.body.imageUrl || item.imageUrl;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete item by ID
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.remove();
    res.json({ message: 'Item removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
};