const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password })
    return res.dataValues
  }
  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { id })

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })

    return res ? res.dataValues : null
  }
  // 更新用户信息
  async updateById({ id, user_name, password, is_admin, token }) {
    const whereOpt = {}
    const newUser = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(newUser, { user_name })
    password && Object.assign(newUser, { password })
    is_admin && Object.assign(newUser, { is_admin })
    token && Object.assign(newUser, { token })

    const res = await User.update(newUser, { where: whereOpt })
    // console.log(res)
    return res[0] > 0 ? true : false
  }
}

module.exports = new UserService()
