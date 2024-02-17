<template>
  <div>
    <h1>Child One组件</h1>
    <!-- 
      访问 vuex 中的数据
        第一种方法 - 通过 $store 访问
          $store.state.数据名
        
        第二种方法 - 通过辅助函数 mapState 获取

     -->
    <p>从vuex中获取的值:{{ count }}</p>
    <br />
    <button @click="addCount">值 + 1</button>
    <button @click="setCountTo666">1秒后将值改为666</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.commit("addCount");
    },
    setCountTo666() {
      this.$store.dispatch("after1SecUpdateCount", 666);
    },
  },
  /* 
    把state中数据，定义在组件内的计算属性中

    t
  */
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped>
div {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
</style>