import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find'
import Friend from './views/Friend'
import My from './views/My'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter(
  {
    routes: [
      { path: '/find', component: Find },
      { path: '/friend', component: Friend },
      { path: '/my', component: My }
    ]
  }
)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
