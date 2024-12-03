'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    static associate(models) {
      // Subcategory belongs to one Category
      Subcategory.belongsTo(models.Category, { foreignKey: 'categoryId' });

      // Subcategory has many Items
      Subcategory.hasMany(models.Item, { foreignKey: 'subcategoryId' });
    }
  }

  Subcategory.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory',
  });

  return Subcategory;
};
