module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    requestId: DataTypes.STRING,
    requestName: DataTypes.TEXT
  }, {});
  Request.associate = (models) => {
    // associations can be defined here
    Request.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return Request;
};

// src/models/post.js
