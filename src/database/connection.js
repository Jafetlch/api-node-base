import Sequelize from 'sequelize'
// basedata - user - password
export const sequelize = new Sequelize('test', 'postgres', 'secret', {
  host: '127.0.0.1',
  dialect: 'postgres'
})
