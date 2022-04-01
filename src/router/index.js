import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import("@/components/HomePage.vue")
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About.vue')
    },
    {
      path: '/busshelter',
      name: 'BusShelter',
      component: () => import('@/components/BusShelter.vue')
    },
  ]
})

export default router
