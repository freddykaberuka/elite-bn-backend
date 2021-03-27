const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'requester',
      });
      Trip.belongsTo(models.User, {
        foreignKey: 'lineManager',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'manager',
      });
      Trip.belongsTo(models.Accomodations, {
        foreignKey: 'accomodationId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'accomodation',
      });

      Trip.hasMany(models.comment, {
        foreignKey: 'tripId',
        as: 'Trip',
      });

      Trip.belongsTo(models.Locations, {
        foreignKey: 'destination',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'to',
      });
    }
  }
  Trip.init(
    {
      user_id: DataTypes.INTEGER,
      orgin: { type: DataTypes.STRING, allowNull: false },
      destination: DataTypes.INTEGER,
      travelDate: { type: DataTypes.DATE, allowNull: false },
      returnDate: { type: DataTypes.DATE, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      reason: { type: DataTypes.STRING, allowNull: false },
      accomodationId: DataTypes.INTEGER,
      lineManager: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM('pending', 'approved', 'canceled', 'rejected'),
        defaultValue: 'pending',
      },
    },
    {
      sequelize,
      modelName: 'Trip',
    },
  );
  return Trip;
};
