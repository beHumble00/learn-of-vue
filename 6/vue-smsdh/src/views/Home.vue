<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text" v-model="keyword" />
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 
        查询参数传参:
          <router-link to="/path?key=value"></...>
          如何接受参数
            固定用法：$router.query.参数名

          动态路由传参:
            配置动态路由, 动态路由后面的参数可以随便起名，但要有语义
         配置导航链接:
            to="/path/参数值"
            对应页面组件**接受参数**:
            params后面的参数名要和动态路由配置的参数保持一致
       -->
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindMusic",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      /* 
        路由跳转方式
      this.$router.push("/search");
      */

      // 完整写法:
      // this.$router.push({
      //   path: "/search",
      //   query: {
      //     keyword: this.keyword,
      //   },
      // });

      // this.$router.push(`/search/${this.keyword}`);
      this.$router.push({
        name: "toSearch",
        params: {
          keyword: this.keyword,
        },
      });
    },
  },
};
</script>

<style>
.logo-box {
  height: 150px;
  background: url("@/assets/logo.jpeg") no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>