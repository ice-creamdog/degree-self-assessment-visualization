const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const { getUserInfo, createUser } = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')
class UserController {
  async register(ctx) {
    const { user_name, password } = ctx.request.body

    try {
      const res = await createUser(user_name, password)

      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (error) {
      console.error(error)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }
  async login(ctx) {
    const { user_name } = ctx.request.body
    try {
      const { password, ...res } = await getUserInfo({ user_name })
      console.log(password)
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
        }
      }
    } catch (err) {
      console.error('用户登录失败', err)
    }
  }

  async changePassword(ctx) {
    console.log(ctx)
  }

  async logout(ctx) {
    console.log(ctx)
  }
}

module.export = new UserController()
