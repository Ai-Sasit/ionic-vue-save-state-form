import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Main.vue'),
  },
  {
    path: '/form-state',
    name: 'form-state',
    component: () => import('@/views/FormState.vue')
  },
  {
    path: '/current-address',
    name: 'current-address',
    component: () => import('@/views/CurrentAddress.vue')
  },
  {
    path: '/fix-address',
    name: 'fix-address',
    component: () => import('@/views/FixAddress.vue')
  },
  {
    path: '/tel',
    name: 'tel',
    component: () => import('@/views/Tel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
