const express = require('express');
const subcategoryController = require('../controllers/subcategoryController');

module.exports = (app) => {
  const router = express.Router();

  // Subcategory Routes
  router.get('/subcategories', subcategoryController.getAllSubcategories);
  router.get('/subcategories/:id', subcategoryController.getSubcategoryById);
  router.post('/subcategories', subcategoryController.createSubcategory);
  router.put('/subcategories/:id', subcategoryController.updateSubcategory);
  router.delete('/subcategories/:id', subcategoryController.deleteSubcategory);

  app.use('/api', router);
};
