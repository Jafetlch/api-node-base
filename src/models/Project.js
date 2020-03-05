import Sequelize from 'sequelize'
import { sequelize } from '@root/database/connection'

import Task from './Task'

const Project = sequelize.define('projects', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  priority: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  deliverydate: {
    type: Sequelize.DATE,
    allowNull: true
  }
})

Project.hasMany(Task, { as: 'Tasks', foreingKey: 'projectId', sourceKey: 'id' })

export default Project
