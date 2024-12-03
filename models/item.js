'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // Item belongs to one Subcategory
      Item.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
    }
  }

  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subcategories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });

  return Item;
};
