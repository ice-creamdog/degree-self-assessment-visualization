import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || ''
  if (to.name !== 'login') {
    if (!token) {
      next({ name: 'login' })
    } else next()
  } else {
    if (!token) next()
    else next({ name: 'index' })
  }
})

export default router
