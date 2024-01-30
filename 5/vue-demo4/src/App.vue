<template>
  <h3>自定义指令</h3>
  <input v-focus type="text" />
  <hr />

  <!-- 指令="值" -->
  <h3 v-color="color">自定义指令-指令的值</h3>
  <button @click="color = 'pink'">change color</button>
  <hr />

  <!-- 封装一个加载指令 -->
  <h3>v-loading</h3>
  <div class="main">
    <div class="box" v-loading="isLoading">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
          <div class="right">
            <img :src="item.img" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
  <hr />
  <h3>插槽</h3>
  <!-- 
    插槽:
      让组件内部的一些 **结构** 支持 **自定义**
   -->
  <MyDialog>
    <!-- 
      # = v-slot:"slotName"
     -->
    <template #title>
      <h3>dialog</h3>
    </template>
    <template #content> 你好我是一个 dialog </template>
  </MyDialog>
  <hr />

  <h3>作用域插槽 - 给插槽传值</h3>
  <MyTableTest>
    <!-- 
      在template中, 通过 #slotName="obj"结构
        默认插槽的插槽名为 default
     -->
    <template #default="data">
      <div>data id = {{ data.id }}</div>
      <div>data msg = {{ data.msg }}</div>
    </template>
  </MyTableTest>
  <hr />

  <MyTable :data="list1">
    <template #default="data">
      <button @click="console.log(data.id)">查看</button>
    </template>
  </MyTable>
  
  <MyTable :data="list2">
    <template #default="data">
      <button @click="console.log(data.id)">删除</button>
    </template>
  </MyTable>
</template>

<script>
import axios from "axios";
import MyDialog from "./components/MyDialog.vue";
import MyTableTest from "./components/MyTableTest.vue";
import MyTable from "./components/MyTable.vue";
export default {
  data() {
    return {
      color: "red",

      list: [],
      isLoading: true,
      isLoading2: false,
      list1: [
        { id: 1, name: "张小花", age: 18 },
        { id: 2, name: "孙大明", age: 19 },
        { id: 3, name: "刘德忠", age: 17 },
      ],
      list2: [
        { id: 1, name: "赵小云", age: 18 },
        { id: 2, name: "刘蓓蓓", age: 19 },
        { id: 3, name: "姜肖泰", age: 17 },
      ],
    };
  },
  components: {
    MyDialog,
    MyTableTest,
    MyTable,
  },
  /* 
    局部注册指令:
  */
  directives: {
    // 指令名,
    focus: {
      // 指令配置项
      mounted(ele) {
        ele.focus();
      },
    },
    color: {
      /* 
          通过binding.value就可以拿到指令绑定的值
        */
      mounted(el, binding) {
        el.style.color = binding.value;
      },

      /* 
      钩子 updated(el, binding, vnode, prevVnode) {},
        在绑定元素的父组件
        及他自己的所有子节点都更新后调用
      */
      updated(el, binding) {
        el.style.color = binding.value;
      },
    },
    loading: {
      mounted(el, binding) {
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },

      updated(el, binding) {
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
    },
  },
  async created() {
    // 1. 发送请求获取数据
    const res = await axios.get("http://hmajax.itheima.net/api/news");

    setTimeout(() => {
      // 2. 更新到 list 中，用于页面渲染 v-for
      this.list = res.data.data;
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style>
.loading:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url("./loading.gif") no-repeat center;
  transition: all 0.3s;
}

.box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
}

.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>