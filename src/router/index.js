import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/pages/Homepage'
import Signup from '@/pages/Signup'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },
  ]
})

export default router
