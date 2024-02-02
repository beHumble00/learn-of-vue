import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  /* 
    动态路由传参:
      配置动态路由, 动态路由后面的参数可以随便起名，但要有语义
    配置导航链接:
      to="/path/参数值"
    对应页面组件**接受参数**:
      params后面的参数名要和动态路由配置的参数保持一致
  */
  routes:
    [
      { path: '/home', component: Home },
      { path: '/search/:keyword', component: Search },
    ]
});
export default router
