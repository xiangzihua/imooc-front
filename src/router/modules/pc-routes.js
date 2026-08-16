export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Layout/index.vue'),
    children: []
  }
]
