import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/info/:id',
      name: 'info',
      component: () => import('../views/GameInfo.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminPage.vue')
    },
    {
      path: '/admin/all-users',
      name: 'all-users',
      component: () => import('../views/AdminAllUsers.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GameListView.vue')
    },
    {
      path: '/game/add',
      name: 'addGame',
      component: () => import('../views/AddGame.vue')
    },
    {
      path: '/games',
      name: 'allGames',
      component: () => import('../views/AllGames.vue')
    },
  ]
})

export default router
