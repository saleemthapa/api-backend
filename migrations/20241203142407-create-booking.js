'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      venueId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Venues', // Reference to the 'Venues' table
          key: 'id',
        },
        allowNull: false,
      },
      hallId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Halls', // Reference to the 'Halls' table
          key: 'id',
        },
        allowNull: false,
      },
      menuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Menus', // Reference to the 'Menus' table
          key: 'id',
        },
        allowNull: false,
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  },
};
