import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import packages from '@/components/packages'
import preview from '@/components/preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/packages',
    	name:'packages',
    	component: packages
    },
    {
    	path: '/product/:id',
    	name:'product',
    	component: preview
    }
  ]
})
