module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'Edmond',
        lastName: 'Ndayishimiye',
        email: 'edmond@example.com',
        password: 'samplepassword',
        isVerified: true,
        token: null,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Alexi',
        lastName: 'vacilli',
        email: 'alexi@example.com',
        password: 'samplepassword',
        isVerified: true,
        token: null,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Super',
        lastName: 'Admin',
        email: 'admin@barefoot.com',
        // Admin password is "admin1234"
        password: '$2b$10$5bVBlFQxpo3.laIrak8wFuRk5RkfkmLd5N1EuHVTlLFUto/eEoGqe',
        isVerified: true,
        token: null,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'requesterTest',
        lastName: 'testing',
        email: 'neddyberry@gmail.com',
        // requesterTest password is "admin1234"
        password: '$2b$10$5bVBlFQxpo3.laIrak8wFuRk5RkfkmLd5N1EuHVTlLFUto/eEoGqe',
        isVerified: true,
        token: null,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'manager',
        lastName: 'testing',
        email: 'trojanx07@gmail.com',
        // requesterTest password is "admin1234"
        password: '$2b$10$5bVBlFQxpo3.laIrak8wFuRk5RkfkmLd5N1EuHVTlLFUto/eEoGqe',
        isVerified: true,
        token: null,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
