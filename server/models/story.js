export default (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    story_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    story_body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Story.associate = (models) => {
    Story.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Story;
};
