const childrenRoutes = [
  {
    path: '/project',
    name: '项目管理',
    // redirect: '/show',
    component: () => import('@/pages/projectEdit/index.vue'),
    children: [
      {
        path: 'create',
        name: 'create-project',
        component: () => import('@/pages/projectEdit/create.vue')
      },
      {
        path: 'edit',
        name: 'edit-project',
        component: () => import('@/pages/projectEdit/edit.vue')
      },
      {
        path: 'lists',
        name: 'lists-project',
        component: () => import('@/pages/projectEdit/lists.vue')
      },
      {
        path: 'show',
        name: 'show-project',
        component: () => import('@/pages/projectEdit/show.vue')
      }
    ]
  },

  {
    path: '/tool',
    name: 'tool',
    component: () => import('@/pages/tool/index.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/pages/userInfo/index.vue')
  }
]
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/',
    name: 'index',
    title: '首页',
    redirect: '/',
    children: childrenRoutes,
    component: () => import('@/layout/MainLayout.vue')
  }
]

export default routes
export { childrenRoutes }
