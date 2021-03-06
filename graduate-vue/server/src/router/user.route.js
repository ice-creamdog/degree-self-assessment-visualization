const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  verifyLogin,
  crpytPassword,
  tokenCheck
} = require('../middleware/user.middleware')

const { register, login, changePassword, logout } = require('../controller/user.controller')

const router = new Router({
  prefix: '/user'
})

router.post('/register', userValidator, verifyUser, crpytPassword, register)

router.post('/login', userValidator, verifyLogin, login)

router.patch('/', crpytPassword, tokenCheck, changePassword)

router.post('/logout', tokenCheck, logout)

module.exports = router
