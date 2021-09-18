'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

    return queryInterface.bulkInsert('Bookings', [
      
      {
        listingId: 1,
        userId: 2,
        numGuests: 2,
        startDate: new Date(2021,6,20,0,0,0,0),
        endDate: new Date(2021, 6, 30, 0, 0, 0, 0)
    },

      {
        listingId: 1,
        userId: 3,
        numGuests: 4,
        startDate: new Date(2021, 7, 22, 0, 0, 0, 0),
        endDate: new Date(2021, 7, 25, 0, 0, 0, 0)
      },

      {
        listingId: 1,
        userId: 4,
        numGuests: 4,
        startDate: new Date(2021, 10, 5, 0, 0, 0, 0),
        endDate: new Date(2021, 10, 18, 0, 0, 0, 0)
      },

      {
        listingId: 2,
        userId: 5,
        numGuests: 2,
        startDate: new Date(2021, 11, 7, 0, 0, 0, 0),
        endDate: new Date(2021, 11, 25, 0, 0, 0, 0)
      },

      {
        listingId: 3,
        userId: 6,
        numGuests: 1,
        startDate: new Date(2021, 8, 18, 0, 0, 0, 0),
        endDate: new Date(2021, 8, 20, 0, 0, 0, 0)
      },

      {
        listingId: 4,
        userId: 7,
        numGuests: 2,
        startDate: new Date(2021, 1, 12, 0, 0, 0, 0),
        endDate: new Date(2021, 2, 17, 0, 0, 0, 0)
      },


      {
        listingId: 5,
        userId: 8,
        numGuests: 1,
        startDate: new Date(2021, 8, 20, 0, 0, 0, 0),
        endDate: new Date(2021, 8, 25, 0, 0, 0, 0)
      },

      {
        listingId: 6,
        userId: 1,
        numGuests: 1,
        startDate: new Date(2021, 1, 22, 0, 0, 0, 0),
        endDate: new Date(2021, 1, 28, 0, 0, 0, 0)
      },


      {
        listingId: 7,
        userId: 1,
        numGuests: 3,
        startDate: new Date(2021, 8, 18, 0, 0, 0, 0),
        endDate: new Date(2021, 8, 20, 0, 0, 0, 0)
      },

      {
        listingId: 8,
        userId: 1,
        numGuests: 2,
        startDate: new Date(2021, 8, 20, 0, 0, 0, 0),
        endDate: new Date(2021, 8, 27, 0, 0, 0, 0)
      },

      {
        listingId: 9,
        userId: 1,
        numGuests: 4,
        startDate: new Date(2021, 9, 25, 0, 0, 0, 0),
        endDate: new Date(2021, 9, 29, 0, 0, 0, 0)
      },

      {
        listingId: 10,
        userId: 1,
        numGuests: 2,
        startDate: new Date(2021, 4, 20, 0, 0, 0, 0),
        endDate: new Date(2021, 5, 10, 0, 0, 0, 0)
      },

      {
        listingId: 10,
        userId: 1,
        numGuests: 3,
        startDate: new Date(2021, 9, 9, 0, 0, 0, 0),
        endDate: new Date(2021, 9, 18, 0, 0, 0, 0)
      },
  
  
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Bookings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
