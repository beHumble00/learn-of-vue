<template>
  <div class="article-page">
    <ArticleItem
      v-for="(item, idx) in articleList"
      :idx="idx"
      :item="item"
      :key="item.id"
    >
    </ArticleItem>
  </div>
</template>

<script>
import axios from "axios";
import ArticleItem from "@/components/ArticleItem.vue";
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: "ArticlePage",
  data() {
    return {
      articleList: [],
    };
  },
  components: {
    ArticleItem,
  },
  methods: {},
  async created() {
    const res = await axios.get("https://mock.boxuegu.com/mock/3083/articles");
    this.articleList = res.data.result.rows;
    console.log(res);
  },
};
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>