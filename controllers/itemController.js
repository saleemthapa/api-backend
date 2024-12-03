const db = require('../models');
const Item = db.Item;

module.exports = {
  // Get all items
  getAllItems: async (req, res) => {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get item by ID
  getItemById: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new item
  createItem: async (req, res) => {
    try {
      const item = await Item.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an existing item
  updateItem: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      await item.update(req.body);
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete an item
  deleteItem: async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      await item.destroy();
      res.status(204).json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
