// models/booking.js
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      customerName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      venueId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Venues', // Foreign key reference to 'Venues'
          key: 'id'
        },
        allowNull: false
      },
      hallId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Halls', // Foreign key reference to 'Halls'
          key: 'id'
        },
        allowNull: false
      },
      menuId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Menus', // Foreign key reference to 'Menus'
          key: 'id'
        },
        allowNull: false
      },
      bookingDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      bookingTimeSlot: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending' // Default status can be 'Pending'
      }
    }, {
      tableName: 'Bookings', // Ensure the table name is correct
      timestamps: true // Enable timestamps for createdAt and updatedAt
    });
  
    Booking.associate = (models) => {
      // Associations (if needed)
      Booking.belongsTo(models.Venue, { foreignKey: 'venueId' });
      Booking.belongsTo(models.Hall, { foreignKey: 'hallId' });
      Booking.belongsTo(models.Menu, { foreignKey: 'menuId' });
    };
  
    return Booking;
  };
  