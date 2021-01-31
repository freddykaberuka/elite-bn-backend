module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rolepermissions', [{
      role_id: '1',
      permission_id: '3',
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('rolepermissions', null, {}),
};
