'use strict';

/** @type {import('sequelize-cli').Sequelize} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subcategories', [
      {
        name: 'Fried Rice',
        categoryId: 1, // Linking to "Starters" category
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Spring Rolls',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken Curry',
        categoryId: 2, // Linking to "Main Course" category
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mutton Curry',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subcategories', null, {});
  }
};
