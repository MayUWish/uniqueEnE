'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-User',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'ava@user.io',
        username: 'Ava-Kiss',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'berry@user.io',
        username: 'Berry-Hug',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'cici@user.io',
        username: 'Cici-Forture',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dream@user.io',
        username: 'Dream-True',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'ella@user.io',
        username: 'Ella-Pretty',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'friend@user.io',
        username: 'Friend-Forever',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'great@user.io',
        username: 'Great-Day',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'happy@user.io',
        username: 'Happy-World',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', 
    // {
    //   username: { [Op.in]: ['Demo-User', 'Ava-Kiss', 'Cici-Forture'] }
    // },

    null, 
    { truncate: true, cascade: true, restartIdentity: true }
    
    );
  }
};
