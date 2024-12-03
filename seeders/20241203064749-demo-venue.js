'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Venues', [
      {
        name: 'Venue 1',
        capacity: 200,
        location: 'Kathmandu',
        address: '123 Street, Kathmandu',
        contactNumber: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Venue 2',
        capacity: 300,
        location: 'Pokhara',
        address: '456 Avenue, Pokhara',
        contactNumber: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Venues', null, {});
  }
};
