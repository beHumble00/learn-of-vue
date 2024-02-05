<template>
  <div>
    <h1>Child One组件</h1>
    <!-- 
      访问 vuex 中的数据
        第一种方法: 
          $store.state.数据名
     -->
    <p>从vuex中获取的值:{{ $store.state.count }}</p>
    <br />
    <button @click="addFive">值 + 5</button>
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(3)">值 - 3</button>
    <button @click="subCount(5)">值 - 5</button>
  </div>
</template>

<script>
export default {
  methods: {
    addFive() {
      // 提交调用 mutations
      this.$store.commit("addFive");
    },
    subCount(val){
      this.$store.commit('subCount',val);
    }
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