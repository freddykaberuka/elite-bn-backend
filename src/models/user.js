import DataTypes from 'sequelize';
import db from '../config/database';

const User = db.define('User', {
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  secondName: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
module.exports = User;
