'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hall extends Model {
    static associate(models) {
      // Hall belongs to a Venue
      Hall.belongsTo(models.Venue, { foreignKey: 'venueId' });
      // In Hall model (models/hall.js)
      Hall.hasMany(models.Booking, { foreignKey: 'hallId' });

    }
  }
  Hall.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Hall',
  });
  return Hall;
};
