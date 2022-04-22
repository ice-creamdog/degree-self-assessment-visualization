const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const User = seq.define('school_user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员，默认不是（0），1：是管理员'
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'token'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})
// User.sync({ force: true })
module.exports = User
