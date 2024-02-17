<template>
  <div id="app">
    <!-- 
      访问 vuex 中的数据
        第一种方法: 
          $store.state.数据名
     -->
    <h1>根组件:{{ count }}</h1>
    <h3>{{ title }}</h3>
    <button @click="changeTitle">click me to change title</button>
    <input
      :value="title"
      @input="handleSetTitle"
      type="text"
      placeholder="set title"
    />
    <ChildOne></ChildOne>
    <ChildTwo></ChildTwo>

    <div>
      {{ $store.getters.filterList }}
    </div>
    <hr />
    <div>
      <h3>user</h3>
      <User></User>
    </div>
  </div>
</template>

<script>
import ChildOne from "./components/ChildOne.vue";
import ChildTwo from "./components/ChildTwo.vue";
import User from "./components/User.vue";
/* 
  通过辅助函数 mapState 获取
    --mapState是辅助函数，帮助我们把store中的数据映射到 组件的计算属性中, 它属于一种方便的用法
  第一步 导入 mapState (mapState是 vuex 中的一个函数)

  第二步：采用数组形式引入state属性
    mapState会把数组对应的state属性转换成组件中计算属性的形式
    所以可以通过 ... 展开运算符直接吧 mapState 放到组件的计算属性中既可使用

*/
import { mapMutations, mapState } from "vuex";

/* 
  辅助函数- mapMutations 功能和 mapState 一样

  !  Vuex中mutations中要求不能写异步代码，如果有异步的ajax请求，应该放置在actions中
*/
console.log(mapState(["count", "title"]));
export default {
  data() {
    return {};
  },

  components: {
    ChildOne,
    ChildTwo,
    User,
  },

  created() {
    console.log(this.$store);
  },

  computed: {
    ...mapState(["count", "title"]),
  },
  methods: {
    ...mapMutations(["changeTitle"]),
    handleSetTitle(e) {
      this.$store.commit("setTitle", e.target.value);
    },
  },
};
</script>

<style scoped>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>