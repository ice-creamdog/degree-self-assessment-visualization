const { Sequelize } = require('sequelize')

const { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default')

// console.log(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB)

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
})

// 测试
// seq
//   .authenticate()
//   .then(() => {
//     console.log(1)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

module.exports = seq
