'use strict';

/** @type {import('sequelize-cli').Sequelize} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Starters',
        menuId: 1, // Linking to "Wedding Menu 1"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Main Course',
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Desserts',
        menuId: 2, // Linking to "Wedding Menu 2"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drinks',
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
