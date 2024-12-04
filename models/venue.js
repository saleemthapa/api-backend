'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    static associate(models) {
      // Define associations here, if any (e.g., Venue hasMany Menus)
      Venue.hasMany(models.Menu, { foreignKey: 'venueId' });
      Venue.hasMany(models.Hall, { foreignKey: 'venueId' });
      // In Venue model (models/venue.js)
      Venue.hasMany(models.Booking, { foreignKey: 'venueId' });

    }
  }
  Venue.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    contactNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venue;
};
