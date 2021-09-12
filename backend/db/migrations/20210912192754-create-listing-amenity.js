'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ListingAmenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Listings' }
      },
      amenityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Amenities' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ListingAmenities');
  }
};