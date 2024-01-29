<template>
  <div class="user-info">
    <h3>我是个人信息组件</h3>
    <div>姓名：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>是否单身：{{ isSingle ? "是" : 否 }}</div>
    <div>座驾：{{ car.Brand }}</div>
    <div>
      兴趣爱好：
      <li v-for="(item, idx) in hobby" :key="idx">
        {{ item }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  /* 
    props:
      组件上 注册的一些  自定义属性
      1. 可以 传递 **任意数量** 的prop
      2. 可以 传递 **任意类型** 的prop
  */
  props: ["username", "age", "isSingle", "car", "hobby"],
};
</script>

<style scoped>
.user-info {
  width: 300px;
  border: 3px solid #000;
  padding: 20px;
}
.user-info > div {
  margin: 20px 10px;
}
</style>