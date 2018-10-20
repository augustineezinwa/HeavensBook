export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Comment;
};
