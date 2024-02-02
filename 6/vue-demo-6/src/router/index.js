import Vue from 'vue'
import VueRouter from 'vue-router'
/* 
  @ 表示当前工程的 src 目录
*/
import Find from '@/views/Find.vue'
import Friend from "@/views/Friend.vue"
import My from "@/views/My.vue"
// VueRouter 插件初始化
Vue.use(VueRouter)

/* 
  配置路由规则
*/
const router = new VueRouter(
  {
    routes: [
      { path: '/find', component: Find },
      { path: '/friend', component: Friend },
      { path: '/my', component: My },
    ]
  }
);
// 导出 router
export default router;