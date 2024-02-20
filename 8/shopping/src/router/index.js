import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import MyOrder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search'
import SearchList from '@/views/search/list.vue'

import Cart from '@/views/layout/cart'
import Category from '@/views/layout/category'
import Home from '@/views/layout/home'
import User from '@/views/layout/user'

Vue.use(VueRouter)
/*
  不配置 mode 就默认是 hash 模式, 该模式下路径带 #
*/
const routes = [
  // [/ 表示默认路径下显示的路由]
  {
    path: '/',
    component: Layout,
    /* redirect 重定向, 用户访问 '/' 时, 重定向到 home */
    redirect: '/home',
    /*
      在配置的路由后面, 添加children,并在 children 中添加二级路由, 就能实现路由嵌套
    */
    children: [
      { path: '/cart', component: Cart },
      { path: '/category', component: Category },
      { path: '/home', component: Home },
      { path: '/user', component: User }
    ]
  },
  { path: '/login', component: Login },
  { path: '/myorder', component: MyOrder },
  { path: '/pay', component: Pay },
  { path: '/prodetail/:id', component: ProDetail },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList }
]

const router = new VueRouter({
  routes
})

export default router
