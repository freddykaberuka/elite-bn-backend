module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Permissions',
    [
      {
        permissionName: 'viewTheirTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'editTheirTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'createTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'cancelTheirTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'editTheirProfile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'bookAccomodations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'viewTheirDirectReportsTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'rejectTheirDirectReportsTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'approveTheirDirectReportsTravelRequests',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'assignRequestersToManager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'createAccommodations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'deleteAccommodations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'updateAccommodations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'createLocations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'updateLocations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionName: 'deleteLocations',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Permissions', null, {}),
};
