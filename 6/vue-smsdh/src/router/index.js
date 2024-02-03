import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  /* 
    路由的路径看起来不自然, 有#，能否切成真正路径形式?
    - hash路由(默认)        例如:  http://localhost:8080/#/home
    - history路由(常用)     例如: http://localhost:8080/home   (以后上线需要服务器端支持，开发环境webpack给规避掉了history模式的问题)

  */
  mode: 'history',

  /* 
    动态路由传参:
      配置动态路由, 动态路由后面的参数可以随便起名，但要有语义
    配置导航链接:
      to="/path/参数值"
    对应页面组件**接受参数**:
      params后面的参数名要和动态路由配置的参数保持一致
    动态路由传参必须要配参数, 不然就会显示空白页
    如果不传参数，也希望匹配，可以加个可选符"？"
  */
  routes:
    [
      { path: '/home', component: Home },
      { path: '/search/:keyword', component: Search },
      /* 
        路由重定向 : 网页打开时， url 默认是 / 路径，未匹配到组件时，会出现空白
        **重定向** → 匹配 / 后, 强制跳转 /home 路径
      */
      { path: '/', redirect: '/home' },
      /* 
        命名路由进行跳转
      */
      { name: 'toSearch', path: '/search', component: Search },
      /* 
        Vue路由-404
          404的路由，虽然配置在任何一个位置都可以，但一般都**配置在其他路由规则的最后面**
          path: "*"   (任意路径) – 前面不匹配就命中最后这个
      */
      { path: '*', component: NotFound },
    ]
});
export default router
