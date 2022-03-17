const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const { getUserInfo, createUser, updateById } = require('../service/user.service')
const { userRegisterError, userLoginError } = require('../constant/err.type')
class UserController {
  // 注册
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
  // 登录
  async login(ctx) {
    const { user_name } = ctx.request.body
    try {
      const { password, ...res } = await getUserInfo({ user_name })
      let token
      if (res) {
        token = jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
        const { id } = { res }
        const updateToke = await updateById({ id, token })
        if (updateToke) {
          ctx.body = {
            code: 0,
            message: '用户登录成功',
            result: {
              token: token
            }
          }
        }
      }
    } catch (err) {
      console.error('用户登录失败', err)
      ctx.app.emit('error', userLoginError, ctx)
    }
  }
  // 修改密码
  async changePassword(ctx) {
    console.log(ctx)
  }

  // 登出
  async logout(ctx) {
    // 验证token
    //
  }
}

module.export = new UserController()
