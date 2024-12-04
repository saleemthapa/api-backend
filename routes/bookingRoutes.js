// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/', bookingController.createBooking);

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Get a specific booking by ID
router.get('/:id', bookingController.getBookingById);

module.exports = (app) => {
  app.use('/api/bookings', router);
};
