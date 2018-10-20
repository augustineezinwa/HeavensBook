export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Stories', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    story_title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    story_body: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'uuid',
        as: 'userId',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Stories')
};
