module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'Edmond',
        lastName: 'Ndayishimiye',
        email: 'edmond@example.com',
        password: 'samplepassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Alexi',
        lastName: 'vacilli',
        email: 'alexi@example.com',
        password: 'samplepassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
