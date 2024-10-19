import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shows',
      name: 'shows',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShowsView.vue')
    },

    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue')
    },

    {
      path: '/merch',
      name: 'merch',

      component: () => import('../views/MerchView.vue')
    }
  ]
})

export default router
