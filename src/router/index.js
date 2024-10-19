import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowsView from '../views/ShowsView.vue'
import ContactView from '../views/ContactView.vue'
import MerchView from '../views/MerchView.vue'

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
      component: ShowsView
    },

    {
      path: '/contact',
      name: 'contact',

      component: ContactView
    },

    {
      path: '/merch',
      name: 'merch',

      component: MerchView
    }
  ]
})

export default router
