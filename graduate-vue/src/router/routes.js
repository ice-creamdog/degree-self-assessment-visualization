const childrenRoutes = [
  {
    path: '/project',
    name: '项目管理',
    // redirect: '/show',
    meta: { title: '项目管理', hidden: false, icon: 'el-icon-edit' },
    component: () => import('@/pages/projectEdit/index.vue'),
    children: [
      {
        path: 'create',
        meta: { title: '项目创建', hidden: false, icon: 'el-icon-edit' },
        name: 'create-project',
        component: () => import('@/pages/projectEdit/create.vue')
      },
      {
        path: 'edit',
        name: 'edit-project',
        meta: { title: '项目编辑', hidden: false, icon: 'el-icon-edit' },
        component: () => import('@/pages/projectEdit/edit.vue')
      },
      {
        path: 'lists',
        name: 'lists-project',
        meta: { title: '项目列表', hidden: false, icon: 'el-icon-edit' },
        component: () => import('@/pages/projectEdit/lists.vue')
      },
      {
        path: 'show',
        name: 'show-project',
        meta: { title: '项目展示', hidden: false, icon: 'el-icon-edit' },
        component: () => import('@/pages/projectEdit/show.vue')
      }
    ]
  },

  {
    path: '/tool',
    name: 'tool',
    meta: { title: '工具管理', hidden: false, icon: 'el-icon-edit' },
    component: () => import('@/pages/tool/index.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: { title: '用户信息', hidden: false, icon: 'el-icon-edit' },
    component: () => import('@/pages/userInfo/index.vue')
  }
]
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录', hidden: true, icon: 'el-icon-edit' },
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/',
    name: 'index',
    title: '首页',
    redirect: '/project',
    meta: { title: '项目编辑', hidden: false, icon: 'el-icon-edit' },
    children: childrenRoutes,
    component: () => import('@/layout/MainLayout.vue')
  }
]

export default routes
export { childrenRoutes }
