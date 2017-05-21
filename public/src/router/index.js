import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/Multiple/Admin'
import Front from '@/Multiple/Front'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front',
      component: Front,
      default: true
    },
    {
      path: '/geeku',
      name: 'admin',
      component: Admin
    }
  ]
})
