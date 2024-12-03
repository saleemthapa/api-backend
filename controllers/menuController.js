const db = require('../models');
const Menu = db.Menu;

module.exports = {
  // Get all menus
  getAllMenus: async (req, res) => {
    try {
      const menus = await Menu.findAll();
      res.status(200).json(menus);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get menu by ID
  getMenuById: async (req, res) => {
    try {
      const menu = await Menu.findByPk(req.params.id);
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
      res.status(200).json(menu);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new menu
  createMenu: async (req, res) => {
    try {
      const menu = await Menu.create(req.body);
      res.status(201).json(menu);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an existing menu
  updateMenu: async (req, res) => {
    try {
      const menu = await Menu.findByPk(req.params.id);
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
      await menu.update(req.body);
      res.status(200).json(menu);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a menu
  deleteMenu: async (req, res) => {
    try {
      const menu = await Menu.findByPk(req.params.id);
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
      await menu.destroy();
      res.status(204).json({ message: 'Menu deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
