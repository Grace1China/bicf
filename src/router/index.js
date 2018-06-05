import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
