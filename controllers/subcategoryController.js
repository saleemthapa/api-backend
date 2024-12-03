const db = require('../models');
const Subcategory = db.Subcategory;

module.exports = {
  // Get all subcategories
  getAllSubcategories: async (req, res) => {
    try {
      const subcategories = await Subcategory.findAll();
      res.status(200).json(subcategories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get subcategory by ID
  getSubcategoryById: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByPk(req.params.id);
      if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
      }
      res.status(200).json(subcategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new subcategory
  createSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.create(req.body);
      res.status(201).json(subcategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an existing subcategory
  updateSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByPk(req.params.id);
      if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
      }
      await subcategory.update(req.body);
      res.status(200).json(subcategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a subcategory
  deleteSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByPk(req.params.id);
      if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
      }
      await subcategory.destroy();
      res.status(204).json({ message: 'Subcategory deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
