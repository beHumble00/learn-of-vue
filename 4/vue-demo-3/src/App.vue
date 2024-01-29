<template>
  <h3>v-model原理</h3>
  <!-- 
    v-model实际上是一个语法糖:
      :value 搭配 input 事件的双向绑定
   -->
  <input type="text" v-model="msg1" />
  <br>
  <input type="text" :value="msg1" @input="$event.target.value = msg1" />
</template>

<script>
export default {
  data() {
    return {
      msg1: "msg1",
      msg2: "msg2",
    };
  },
};
</script>

<style>
</style>