<template>
  <div>BaseOne</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 
  写在组件中的样式会 **全局生效** →  因此很容易造成多个组件之间的样式冲突问题。
  可以给组件加上**scoped** 属性,可以**让样式只作用于当前组件**
*/
div {
  width: 150px;
  border: 3px solid skyblue;
  margin: 10px;
}
</style>