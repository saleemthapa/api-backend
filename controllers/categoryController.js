const db = require('../models');
const Category = db.Category;

module.exports = {
  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get category by ID
  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new category
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an existing category
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      await category.update(req.body);
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a category
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      await category.destroy();
      res.status(204).json({ message: 'Category deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
