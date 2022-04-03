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
      component: () => import('@/components/description/BusShelter.vue')
    },
    {
      path: '/helmet',
      name: 'Helmet',
      component: () => import('@/components/description/Helmet.vue')
    },
    {
      path: '/fusion',
      name: 'Fusion',
      component: () => import('@/components/description/Fusion.vue')
    },
    {
      path: '/shelf',
      name: 'Shelf',
      component: () => import('@/components/description/Shelf.vue')
    },
    {
      path: '/chair',
      name: 'Chair',
      component: () => import('@/components/description/Chair.vue')
    },
    {
      path: '/painting',
      name: 'Painting',
      component: () => import('@/components/description/Painting.vue')
    }
  ]
})

export default router
