const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey: 'roleId',
        targetKey: 'id',
        onDelete: 'SET DEFAULT',
        onUpdate: 'CASCADE',
        as: 'users',
        foreignKeyConstraint: true,
      });
      Role.belongsToMany(models.Permission, {
        through: models.rolepermission,
        as: 'permissions',
        foreignKey: 'role_id'
      });
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};
