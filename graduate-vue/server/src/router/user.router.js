const Router = require('koa-router')

const { userValidator, verifyUser } = require('../middleware/user.middleware')
const { login } = require('../controller/user.controller')

const router = new Router({
  prefix: '/users'
})

router.post('/login', userValidator, verifyUser, login)

module.exports = router
