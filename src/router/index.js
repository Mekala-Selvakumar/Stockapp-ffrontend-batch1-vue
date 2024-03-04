import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishListView from  '../views/WishListView.vue'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component:  WishListView
       
    },
    //create routes for login
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    //create routes for register
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegistrationView.vue')

    },

  ]
})

export default router
