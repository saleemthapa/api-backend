'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Sample data for halls
    const halls = [
      {
        name: 'Hall 1',
        capacity: 200,
        venueId: 1,  // Assuming venueId 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hall 2',
        capacity: 300,
        venueId: 1,  // Assuming venueId 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hall 3',
        capacity: 150,
        venueId: 2,  // Assuming venueId 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hall 4',
        capacity: 500,
        venueId: 2,  // Assuming venueId 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert halls data
    await queryInterface.bulkInsert('Halls', halls);
  },

  async down(queryInterface, Sequelize) {
    // Revert the seed by deleting the hall records
    await queryInterface.bulkDelete('Halls', null, {});
  }
};
