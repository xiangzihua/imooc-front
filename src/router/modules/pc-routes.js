export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/main/index.vue')
      }
    ]
  }
]
