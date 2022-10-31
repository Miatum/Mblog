import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Homepage from '@/components/HomePage'
import BlogGrid from '@/components/blog/BlogGrid'
import Category from '@/components/blog/Category'
import Tag from '@/components/blog/Tag'
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
          component: BlogGrid
        },
        {
          path: '/Category',
          component: Category
        },
        {
          path: '/Tag',
          component: Tag
        }
      ]
    }
  ]
})
