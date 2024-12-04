// controllers/bookingController.js
const { Booking, Venue, Hall, Menu } = require('../models');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { customerName, phoneNumber, venueId, hallId, menuId, bookingDate, bookingTimeSlot, status } = req.body;
    
    const booking = await Booking.create({
      customerName,
      phoneNumber,
      venueId,
      hallId,
      menuId,
      bookingDate,
      bookingTimeSlot,
      status
    });
    
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating booking', error: err });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: Venue, attributes: ['name'] },
        { model: Hall, attributes: ['name'] },
        { model: Menu, attributes: ['name'] }
      ]
    });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching bookings', error: err });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        { model: Venue, attributes: ['name'] },
        { model: Hall, attributes: ['name'] },
        { model: Menu, attributes: ['name'] }
      ]
    });
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching booking', error: err });
  }
};
