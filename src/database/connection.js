const Sequelize = require('sequelize')
// basedata - user - password
const sequelize = new Sequelize('test', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false
})

module.exports = sequelize
