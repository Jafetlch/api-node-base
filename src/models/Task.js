import Sequelize from 'sequelize'
import { sequelize } from '@root/database/connection'

import Project from './Project'

const Task = sequelize.define('tasks', {
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
  }
})

Task.belongsTo(Project, { foreingKey: 'projectId', sourceKey: 'id' })

export default Task
