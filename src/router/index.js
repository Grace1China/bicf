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
    {
      path: '/search/:keyword',
      name: 'search',
      component: () => import('@/pages/search')
    },
    {
      path: '/keyword/:keyword',
      name: 'keyword',
      component: () => import('@/pages/keyword')
    },
    {
      path: '/coin/list',
      name: 'coin-list',
      component: () => import('@/pages/coin/list'),
    },
    {
      path: '/coin/p/:id',
      name: 'coin-detail',
      component: () => import('@/pages/coin/detail'),
    },
  ]
})
