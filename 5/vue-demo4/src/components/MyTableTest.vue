<template>
  <!-- 
    给 slot 标签以添加属性的方式传值
   -->
  <slot :id="1" :msg="'测试文本'">

  </slot>
</template>

<script>
export default {

}
</script>

<style>

</style>