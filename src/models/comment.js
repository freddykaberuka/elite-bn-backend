const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.Trip, {
        foreignKey: 'tripId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'Trip',
      });

      comment.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKeyConstraint: true,
        as: 'requester',
      });
    }
  }

  comment.init({
    userId: DataTypes.INTEGER,
    tripId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};
