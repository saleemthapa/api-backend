const express = require('express');
const menuController = require('../controllers/menuController');

module.exports = (app) => {
  const router = express.Router();

  // Menu Routes
  router.get('/menus', menuController.getAllMenus);
  router.get('/menus/:id', menuController.getMenuById);
  router.post('/menus', menuController.createMenu);
  router.put('/menus/:id', menuController.updateMenu);
  router.delete('/menus/:id', menuController.deleteMenu);

  app.use('/api', router);
};
