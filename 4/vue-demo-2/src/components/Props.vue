<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  /* 
  对 props 进行校验:
  为组件的 prop 指定**验证要求**，不符合要求，控制台就会有**错误提示**  → 帮助开发者，快速发现错误
  有:
    - 类型校验
    - 非空校验
    - 默认值
    - 自定义校验
      props: {
        校验的属性名: {
          type: 类型,  // Number String Boolean ...
          required: true, // 是否必填
          default: 默认值, // 默认值
          validator (value) {
            // 自定义校验逻辑
            return 是否通过校验
          }
        }
      },
  */
  props: {
    w: {
      type: Number,
      required: true,
      default: 50,
      validator(w) {
        return w >= 0 && w <= 100;
      },
    },
  },
};
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>