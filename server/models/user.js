export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Story, {
      foreignKey: 'userId',
      as: 'stories',
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
    });
  };

  return User;
};
