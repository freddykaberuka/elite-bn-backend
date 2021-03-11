const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Accomodations);
      Booking.belongsTo(models.User);
    }
  }
  Booking.init({
    checkinDate: DataTypes.DATE,
    checkoutDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    AccomodationId: DataTypes.INTEGER,
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
