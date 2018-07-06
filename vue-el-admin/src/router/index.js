import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/views/layout/layout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login.vue'], resolve)
    },
    {
      path: '/dashboard',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/dashboard/table',
          name: 'table',
          component: resolve => require(['@/views/table/Basictable.vue'], resolve)
        },
        {
          path: '/dashboard/basicChart',
          name: 'basicChart',
          component: resolve => require(['@/views/chart/BasicChart.vue'], resolve)
        },
        {
          path: '/dashboard/activedChart',
          name: 'activedChart',
          component: resolve => require(['@/views/login/login.vue'], resolve)
        },
        {
          path: '/dashboard/drag',
          name: 'drag',
          component: resolve => require(['@/views/login/login.vue'], resolve)
        }
      ]
    }
  ]
})
