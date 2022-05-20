import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Homepage from '@/components/HomePage'
import BlogGrid from '@/components/blog/BlogGrid'
import Category from '@/components/blog/Category'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: Homepage,
      children: [
        {
          path: '/',
          component: BlogGrid
        },
        {
          path: '/Category',
          component: Category
        }
      ]
    }
  ]
})
