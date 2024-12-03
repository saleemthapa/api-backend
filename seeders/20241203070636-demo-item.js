'use strict';

/** @type {import('sequelize-cli').Sequelize} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Veg Fried Rice',
        price: 200,
        subcategoryId: 1, // Linking to "Fried Rice" subcategory
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken Spring Rolls',
        price: 150,
        subcategoryId: 2, // Linking to "Spring Rolls" subcategory
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mutton Biryani',
        price: 500,
        subcategoryId: 3, // Linking to "Chicken Curry" subcategory
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken Masala',
        price: 450,
        subcategoryId: 4, // Linking to "Mutton Curry" subcategory
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
