/* eslint-disable no-unused-vars */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      id: 1,
      name: 'Super admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: 'Travel Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      name: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      name: 'Requester',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
