import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/pages/Homepage'


Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
  ]
})

export default router
