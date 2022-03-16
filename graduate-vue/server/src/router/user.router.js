const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  verifyLogin,
  crpytPassword
} = require('../middleware/user.middleware')

const { register, login, changePassword, logout } = require('../controller/user.controller')

const router = new Router({
  prefix: '/users'
})

router.post('/register', userValidator, verifyUser, crpytPassword, register)

router.post('/login', userValidator, verifyLogin, login)

router.patch('/', crpytPassword, changePassword)

router.post('/logout', logout)

module.exports = router
