const express = require('express');
const venueController = require('../controllers/venueController');

module.exports = (app) => {
  const router = express.Router();

  // Venue Routes
  router.get('/venues', venueController.getAllVenues);
  router.get('/venues/:id', venueController.getVenueById);
  router.post('/venues', venueController.createVenue);
  router.put('/venues/:id', venueController.updateVenue);
  router.delete('/venues/:id', venueController.deleteVenue);

  app.use('/api', router);
};
