<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="item in list" :key="item.id" :item="item"></cart-item>

    <!-- Footer 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'
// 表示从 vuex 引入一个叫 mapState的函数
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  created () {
    // Action 通过 store.dispatch 方法触发
    this.$store.dispatch('cart/getList')
  },
  computed: {
    /*
      当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
      为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性
    */
    ...mapState('cart', ['list'])
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>
