'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: 'US',
      },
      latitude: {
        type: Sequelize.DECIMAL(8,6),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      guestNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedroomNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bathroomNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      twinBedNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      queenBedNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kingBedNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sofaBedNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      enhancedClean: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      selfCheckin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};