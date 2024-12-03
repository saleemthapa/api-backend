'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Category belongs to one Menu
      Category.belongsTo(models.Menu, { foreignKey: 'menuId' });

      // Category has many Subcategories
      Category.hasMany(models.Subcategory, { foreignKey: 'categoryId' });
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Menus',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });

  return Category;
};
