<template>
  <div class="search">
    <p>搜索关键字:{{ keyword }}</p>
    <p>搜索结果:</p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  name: "MyFriend",
  created() {
    this.keyword = this.$route.params.keyword;
  },
};
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>