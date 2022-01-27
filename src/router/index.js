import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})