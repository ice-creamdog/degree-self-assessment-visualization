const Router = require('koa-router')

const router = new Router({
  prefix: '/project'
})

router.get('/list', (ctx) => {
  console.log(11111)
  console.log(ctx)
})
router.get('/detail/:userId/:projectId', (ctx) => {
  console.log(ctx)
})

router.get('/show/:userId/:projectId', (ctx) => {})

router.delete('/delete/:userId/:projectId', (ctx) => {
  console.log(ctx)
})
router.patch('/update/: userId/:projectId', (ctx) => {
  console.log(ctx)
})
router.post('/add', (ctx) => {
  console.log(ctx)
})
module.exports = router
