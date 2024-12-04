const { Hall } = require('../models');

// GET all halls for a specific venue
exports.getHallsByVenue = async (req, res) => {
  try {
    const halls = await Hall.findAll({
      where: { venueId: req.params.venueId }
    });
    res.json(halls);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching halls', error: err });
  }
};

// POST a new hall for a specific venue
exports.createHall = async (req, res) => {
  const { name, capacity } = req.body;
  try {
    const hall = await Hall.create({
      name,
      capacity,
      venueId: req.params.venueId
    });
    res.status(201).json(hall);
  } catch (err) {
    res.status(500).json({ message: 'Error creating hall', error: err });
  }
};

// PUT (update) a hall
exports.updateHall = async (req, res) => {
  const { name, capacity } = req.body;
  try {
    const hall = await Hall.findByPk(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    hall.name = name || hall.name;
    hall.capacity = capacity || hall.capacity;
    await hall.save();
    res.json(hall);
  } catch (err) {
    res.status(500).json({ message: 'Error updating hall', error: err });
  }
};

// DELETE a hall
exports.deleteHall = async (req, res) => {
  try {
    const hall = await Hall.findByPk(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    await hall.destroy();
    res.json({ message: 'Hall deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting hall', error: err });
  }
};
