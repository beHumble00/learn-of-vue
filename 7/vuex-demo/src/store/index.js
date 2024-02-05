import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({

  /* 
    vuex 同样遵循单项数据流, 组件不能直接修改仓库中的数据
      通过 strict: true 可以开启严格模式,开启严格模式后，直接修改state中的值会报错
      
  */

  /* 
    state 提供唯一的公共数据源, 所有共享的数据都要统一放到 Store 中的 State 中存储
      类似于 vue 组件中的 data; state中的数据整个vue项目内组件都可以访问
  */
  state: {
    count: 100,
    title: 'title'
  },
  // state数据的修改只能通过mutations，并且mutations必须是同步的
  // mutations是一个对象，对象中存放修改state的方法
  mutations: {
    // 所有的 mutations 函数的第一个参数都是当前仓库的state属性
    addCount(state) {
      state.count += 1
    },
    addFive(state) {
      state.count += 5
    },
    changeTitle(state) {
      state.title = 'change success'
    },
    subCount(state, value) {
      state.count -= value
    },
    setTitle(state, newTitle) {
      state.title = newTitle;
    }
  }
});
export default store;