<template>
  <div class="dialog">
    <div class="dialog-header">
      <slot name="title">
        <h3>友情提示</h3>
      </slot>
      <span class="close">✖️</span>
    </div>

    <div class="dialog-content">
      <!-- 
        语法:
          组件内需要定制的结构部分, 使用 slot 占位
          在组件标签内部传入结构替换 slot
          给插槽传入的内容可以是 纯文本, html标签, 组件
        默认值 : 
          在 <slot> 标签内，放置内容, 作为默认显示内容
          外部组件不传入内容时显示的就是默认值

        具名插槽
            一个组件内有多处结构，需要外部传入标签，进行定制 
            多个slot使用name属性区分名字 
       -->
      <slot name="content">你确定退出吗</slot>
    </div>
    <div class="dialog-footer">
      <slot name="footer">
        <button>取消</button>
        <button>确认</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 470px;
  height: 230px;
  padding: 0 25px;
  background-color: #ffffff;
  margin: 40px auto;
  border-radius: 5px;
}
.dialog-header {
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.dialog-header .close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.dialog-content {
  height: 80px;
  font-size: 18px;
  padding: 15px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dialog-footer button {
  width: 65px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #e1e3e9;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
}
.dialog-footer button:last-child {
  background-color: #007acc;
  color: #fff;
}
</style>