'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // Define associations here (e.g., Menu belongsTo Venue)
      Menu.belongsTo(models.Venue, { foreignKey: 'venueId' });
    }
  }
  Menu.init({
    name: DataTypes.STRING,
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};
