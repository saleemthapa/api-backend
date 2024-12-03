const express = require('express');
const categoryController = require('../controllers/categoryController');

module.exports = (app) => {
  const router = express.Router();

  // Category Routes
  router.get('/categories', categoryController.getAllCategories);
  router.get('/categories/:id', categoryController.getCategoryById);
  router.post('/categories', categoryController.createCategory);
  router.put('/categories/:id', categoryController.updateCategory);
  router.delete('/categories/:id', categoryController.deleteCategory);

  app.use('/api', router);
};
