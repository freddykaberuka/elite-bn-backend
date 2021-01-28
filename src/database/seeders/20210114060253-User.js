module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        email: 'KindaFunny@gmail.com',
        password: "DataTypes.STRING",
        isVerified: true,
        firstName: "Sleepy",
        lastName: "Gum",
        token: "DataTypes.TEXT",
        role: "requester",
        googleId: "DataTypes.STRING",
        facebookId: "DataTypes.STRING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'findalielie@gmail.com',
        password: "DataTypes.STRING",
        isVerified: true,
        firstName: "Sleepy",
        lastName: "Gum",
        token: "DataTypes.TEXT",
        role: "requester",
        googleId: "DataTypes.STRING",
        facebookId: "DataTypes.STRING",
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
