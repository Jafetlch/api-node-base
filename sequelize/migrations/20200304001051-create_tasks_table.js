'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tasks',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        done: {
          type: Sequelize.BOOLEAN,
          allowNull: true
        },
        projectId: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            key: 'id',
            model: 'projects'
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        charset: 'utf8'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('taks')
  }
}
