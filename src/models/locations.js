const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Locations.hasMany(models.Accomodations, {
        foreignKey: 'location_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        as: 'location',
      });
    }
  }
  Locations.init({
    location_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};
