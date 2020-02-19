import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/pages/Homepage'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import DemoTask from '@/pages/DemoTask'
import Forget from '@/pages/ForgotPassword'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'Homepage',
      component: Homepage
    },
    {
        path: '/homepage',
        name: 'Homepage',
        component: Homepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login 
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/demotask',
      name: 'DemoTask',
      component: DemoTask,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('homepage')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
})

export default router
