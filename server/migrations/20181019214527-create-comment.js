export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Comments', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    comment_body: {
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
  down: queryInterface => queryInterface.dropTable('Comments')
};
