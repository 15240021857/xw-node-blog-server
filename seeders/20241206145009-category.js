'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      name: '后端',
      rank: 1
    },
    {
      name: '数据库',
      rank: 2
    },
    {
      name: '前端',
      rank: 3
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
