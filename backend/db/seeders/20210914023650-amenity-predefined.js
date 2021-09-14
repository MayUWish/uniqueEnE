'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Amenities', [{
      name: 'Wifi',
      iconUrl: 'ToAddLater'
    },
      {
        name: 'TV',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Air conditioning',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Heating',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Cooking basics',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Free parking on premises',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Essentials',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Washer',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Dryer',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Smoke Alarm',
        iconUrl: 'ToAddLater'
      },
      {
        name: 'Carbon monoxide alarm',
        iconUrl: 'ToAddLater'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
    return queryInterface.bulkDelete('Amenities', null, { truncate: true, cascade: true, restartIdentity: true });

  }
};
