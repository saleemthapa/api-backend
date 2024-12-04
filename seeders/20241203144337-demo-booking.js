module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        venueId: 1,
        hallId: 1,
        menuId: 1,
        customerName: 'John Doe',
        date: new Date('2024-12-10'),
        time: '18:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        venueId: 2,
        hallId: 2,
        menuId: 2,
        customerName: 'Jane Smith',
        date: new Date('2024-12-12'),
        time: '20:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
