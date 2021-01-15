module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Requests',
    [
      {
        requestId: '1111',
        requestName: 'hispotan de nu',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ],

    {}
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Requests', null, {})
};
// src/database/seeds/xxxx-Post.js
