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
        startDate: new Date('2021-7-27'),
        endDate: new Date('2021-7-30')
    },

      {
        listingId: 1,
        userId: 3,
        numGuests: 4,
        startDate: new Date('2021-8-22'),
        endDate: new Date('2021-8-29')
      },

      {
        listingId: 1,
        userId: 4,
        numGuests: 4,
        startDate: new Date('2021-10-20'),
        endDate: new Date('2021-10-22')
      },

      {
        listingId: 2,
        userId: 5,
        numGuests: 2,
        startDate: new Date('2021-11-20'),
        endDate: new Date('2021-11-22')
      },

      {
        listingId: 3,
        userId: 6,
        numGuests: 1,
        startDate: new Date('2021-12-02'),
        endDate: new Date('2021-12-22')
      },

      {
        listingId: 4,
        userId: 7,
        numGuests: 2,
        startDate: new Date('2021-01-02'),
        endDate: new Date('2021-01-22')
      },


      {
        listingId: 5,
        userId: 8,
        numGuests: 1,
        startDate: new Date('2021-12-02'),
        endDate: new Date('2021-12-12')
      },

      {
        listingId: 6,
        userId: 1,
        numGuests: 1,
        startDate: new Date('2022-01-02'),
        endDate: new Date('2022-01-05')
      },


      {
        listingId: 7,
        userId: 1,
        numGuests: 3,
        startDate: new Date('2021-12-22'),
        endDate: new Date('2021-12-24')
      },

      {
        listingId: 8,
        userId: 1,
        numGuests: 2,
        startDate: new Date('2021-01-22'),
        endDate: new Date('2021-01-24')
      },

      {
        listingId: 9,
        userId: 1,
        numGuests: 4,
        startDate: new Date('2021-09-17'),
        endDate: new Date('2021-09-20')
      },

      {
        listingId: 10,
        userId: 1,
        numGuests: 2,
        startDate: new Date('2021-02-17'),
        endDate: new Date('2021-02-27')
      },

      {
        listingId: 10,
        userId: 1,
        numGuests: 3,
        startDate: new Date('2021-09-25'),
        endDate: new Date('2021-09-28')
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
