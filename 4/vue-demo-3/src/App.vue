<template>
  <h3>v-model原理</h3>
  <!-- 
    v-model实际上是一个语法糖:
      :value 搭配 input 事件的双向绑定

      v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
      text 和 textarea 元素使用 value 属性和 input 事件；
      checkbox 和 radio 使用 checked 属性和 change 事件；
      select 字段将 value 作为 prop 并将 change 作为事件。
  -->
  <input type="text" v-model="msg1" />
  <br />
  <input type="text" :value="msg1" @input="$event.target.value = msg1" />
  <hr />
  <!-- 父子组件之间的数据双向绑定 -->
  <div class="app">
    <!-- 
      了解 v-model 原理之后
        我们就可以在子组件用 props 来接收 selectId 这个属性(展开来就是 :selectId)

        一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
     -->
    <!-- <BaseSelect
      :selectId="selectId"
      @input="selectId = $event.target.value"
    ></BaseSelect> -->
    <BaseSelect v-model="selectId"></BaseSelect>
    <h4>selectId - {{ selectId }}</h4>
  </div>
  <hr />
  <button @click="isShow = true">close</button>
  <BaseDialog v-model.sync="isShow"></BaseDialog>
  <hr />
  <BaseChart></BaseChart>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
import BaseDialog from "./components/BaseDialog.vue";
import BaseChart from "./components/BaseChart.vue";
export default {
  data() {
    return {
      msg1: "msg1",
      selectId: "102",
      isShow: false,
    };
  },
  components: {
    BaseSelect,
    BaseDialog,
    BaseChart,
  },
};
</script>

<style>
</style>