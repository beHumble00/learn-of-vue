import axios from 'axios'
export default {
  /*
    vuex - namespaced命名空间 :
      带命名空间的模块，具有更高的封装度和复用性
      当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
  */
  namespaced: true,

  // state - 仓库中存放的数据
  state () {
    return {
      list: []
    }
  },
  /*
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
      state
      payload - 提交载荷
        你可以向 store.commit 传入额外的参数，即 mutation 的载荷（payload)
  */
  mutations: {
    updateList (state, payload) {
      state.list = payload
    },
    updateCount (state, payload) {
      const goods = state.list.find((item) => item.id === payload.id)
      goods.count = payload.count
    }
  },
  /*
    Action 类似于 mutation，不同在于：
      Action 提交的是 mutation，而不是直接变更状态。
      Action 可以包含任意异步操作。- 所以我们要在action中发送ajax请求
    Action函数接受一个与 store 实例具有相同方法和属性的 context 对象
      因此你可以调用 context.commit 提交一个 mutation
  */
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    },
    async updateCount (context, payload) {
      axios.patch('http://localhost:3000/cart/' + payload.id, { count: payload.count })
      context.commit('updateCount', payload)
    }
  },
  getters: {
    totalCount (state) {
      return state.list.reduce((pre, cur) => { return cur.count + pre }, 0)
    },
    totalPrice (state) {
      return state.list.reduce((pre, cur) => { return cur.count * cur.price + pre }, 0)
    }
  }
}
