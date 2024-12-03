const db = require('../models');
const Venue = db.Venue;

module.exports = {
  // Get all venues
  getAllVenues: async (req, res) => {
    try {
      const venues = await Venue.findAll();
      res.status(200).json(venues);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get venue by ID
  getVenueById: async (req, res) => {
    try {
      const venue = await Venue.findByPk(req.params.id);
      if (!venue) {
        return res.status(404).json({ message: 'Venue not found' });
      }
      res.status(200).json(venue);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new venue
  createVenue: async (req, res) => {
    try {
      const venue = await Venue.create(req.body);
      res.status(201).json(venue);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an existing venue
  updateVenue: async (req, res) => {
    try {
      const venue = await Venue.findByPk(req.params.id);
      if (!venue) {
        return res.status(404).json({ message: 'Venue not found' });
      }
      await venue.update(req.body);
      res.status(200).json(venue);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a venue
  deleteVenue: async (req, res) => {
    try {
      const venue = await Venue.findByPk(req.params.id);
      if (!venue) {
        return res.status(404).json({ message: 'Venue not found' });
      }
      await venue.destroy();
      res.status(204).json({ message: 'Venue deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
