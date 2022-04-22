const bcrypt = require('bcryptjs')
const { log } = require('console')

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')

const {
  userFormatError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  invalidPassword,
  userLoginError
} = require('../constant/err.type')
const User = require('../model/user.model')
const { getUserInfo } = require('../service/user.service')
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormatError, ctx)
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })

    if (res) {
      console.error('用户名已存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash
  await next()
}

const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUserInfo({ user_name })
    console.log(password, '==', res.password)
    // 用户是否存在
    if (!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 密码是否匹配
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    const salt = bcrypt.genSaltSync(10)
    console.log(bcrypt.hashSync(password, salt))
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}

// token校验
const tokenCheck = async (ctx, next) => {
  const token = ctx.headers.token
  if (!token) {
    ctx.body = {
      status: 403,
      msg: 'token不能为空'
    }
  }
  const result = jwt.verify(token, JWT_SECRET)
  console.log(result)
  if (!result) {
    ctx.body = {
      status: 403,
      message: '登录过期，请重新登录'
    }
    return false
  } else {
    const { dataValues } = await User.findOne({
      where: { id: Number(result.id) }
    })
    console.log(dataValues.token)
    console.log(token)
    if (dataValues.token !== token || !dataValues.token) {
      ctx.body = {
        status: 403,
        message: '登录已过期，请重新登录'
      }
      return false
    }
  }
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  verifyLogin,
  crpytPassword,
  tokenCheck
}
