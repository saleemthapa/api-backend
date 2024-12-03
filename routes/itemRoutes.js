const express = require('express');
const itemController = require('../controllers/itemController');

module.exports = (app) => {
  const router = express.Router();

  // Item Routes
  router.get('/items', itemController.getAllItems);
  router.get('/items/:id', itemController.getItemById);
  router.post('/items', itemController.createItem);
  router.put('/items/:id', itemController.updateItem);
  router.delete('/items/:id', itemController.deleteItem);

  app.use('/api', router);
};
