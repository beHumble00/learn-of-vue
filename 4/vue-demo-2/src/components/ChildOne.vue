<template>
  <div>
    <!-- 3 模板中即可直接使用 -->
    <h3>ChildOne</h3>
    <h4>{{ title }}</h4>
    <button @click="changeFn()">Change Title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 第 2 步 : 在子组件中用 props 接收

 
  props: ["title"],

  /* 
    子传父 - 
  */
  methods: {
    changeFn() {
      // .$emit( event, arg )
      this.$emit("changeTitle", "ChildOne修改了标题");
    },
  },
};
</script>
<style scoped>
div {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>