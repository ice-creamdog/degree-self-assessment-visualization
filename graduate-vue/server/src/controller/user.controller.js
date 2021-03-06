const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const { getUserInfo, createUser, updateById, deleteToken } = require('../service/user.service')
const { userRegisterError, userLoginError, userLogOutError } = require('../constant/err.type')
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
        // console.log(typeof token === 'string')
        const { id } = res
        // console.log(id)
        const updateToke = await updateById({ id, token })
        console.log(updateToke)
        if (updateToke) {
          ctx.body = {
            code: 0,
            message: '用户登录成功',
            result: {
              token: token,
              id: id
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
    const id = ctx.state.user.id
    const { password } = ctx.request.body.password
    try {
      const res = await updateById({ id, password })
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改密码成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: '10007',
          message: '修改密码失败',
          result: ''
        }
      }
    } catch (error) {
      console.error('用户登出失败', error)
      ctx.app.emit('error', userLogOutError, ctx)
    }
  }

  // 登出
  async logout(ctx) {
    // 验证token
    try {
      const { id } = ctx.request.body
      console.log(id, '+++')
      const deleteToke = await deleteToken({ id })
      if (deleteToke) {
        console.log(111)
        ctx.body = {
          code: 0,
          message: '用户登出成功',
          result: ''
        }
      }
      console.log(ctx.status)
    } catch (error) {
      console.error('用户登出失败', error)
      // console.log(ctx.status)
      ctx.app.emit('error', userLogOutError, ctx)
    }
    // 注销token
  }
}

module.exports = new UserController()
