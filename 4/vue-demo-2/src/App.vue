<template>
  <div>
    <h3>App</h3>
  </div>
  <!-- 通过 props 的方式与子组件同信 -->
  <!-- 
    第 1 步 : 以给子组件属性的方式传值
      props要用这里的属性名来接收
   -->
  <!-- 第 2 步 : 在子组件中用 props 接收-->
  <!-- ! ! ! 不要加 (), 会忽略掉子组件传来的东西 -->
  <ChildOne :title="appTitle" @changeTitle="handleChange"></ChildOne>
  <ChildTwo
    :username="username"
    :age="age"
    :isSingle="isSingle"
    :car="car"
    :hobby="hobby"
  ></ChildTwo>

  <Props :w="progress"></Props>
</template>

<script>
import ChildOne from "./components/ChildOne.vue";
import ChildTwo from "./components/ChildTwo.vue";
import Props from "./components/Props.vue";
export default {
  data() {
    return {
      appTitle: "你好我是来自App.vue的标题",
      username: "小美",
      age: 21,
      isSingle: true,
      car: {
        Brand: "Aston Martin",
      },
      hobby: ["滑板", "滑雪"],
      progress: 100,
    };
  },
  components: {
    ChildOne,
    ChildTwo,
    Props,
  },
  methods: {
    handleChange(childArgs) {
      this.appTitle = childArgs;
    },
  },
};
</script>

<style scoped>
div {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>