<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input placeholder="请输入任务" class="new-todo" v-model="todoName" />
    <button class="add" @click="add()">添加任务</button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    add() {
      if (!this.todoName.trim()) {
        alert("请先输入内容");
        return;
      }
      this.$emit("addTodo", this.todoName);
      this.todoName = "";
    },
  },
};
</script>

<style>
</style>