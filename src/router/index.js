import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Homepage from '@/components/HomePage'
import Blog from '@/components/Blog'
import Bill from '@/components/Bill'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '/',
          component: Blog
        },
        {
          path: '/Bill',
          component: Bill
        },
        {
          path: '/Calendar',
          component: Calendar
        },
        {
          path: '/setting',
          component: Setting
        }
      ]
    }
  ]
})
