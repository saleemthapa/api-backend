'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Menus', [
      {
        name: 'Wedding Menu 1',
        venueId: 1, // This assumes Venue 1 exists in the database.
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wedding Menu 2',
        venueId: 2, // This assumes Venue 2 exists in the database.
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
