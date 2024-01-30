import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
/* 
 全局注册指令
 directive(指令名, 配置项)
*/
// app.directive('focus', {
//   /* 
//     inserted(ele) 钩子(vue2):
//       当指令所在的元素被插入到页面时触发

    
//     mounted 是vue3的钩子
//   */
//   mounted(ele) {
//     ele.focus();
//     console.log(ele);
//   }
// })
app.mount('#app')
