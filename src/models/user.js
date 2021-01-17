import DataTypes from 'sequelize';
import db from '../config/database';

const User = db.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'FALSE'
  }
});
module.exports = User;