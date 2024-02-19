<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <img :src="item.thumb" class="avatar" alt="" />
    </div>
    <!-- 右侧商品区域 -->
    <div class="right">
      <!-- 标题 -->
      <div class="title">{{ item.name }}</div>
      <div class="info">
        <!-- 单价 -->
        <span class="price">￥{{ item.price }}</span>
        <div class="btns">
          <!-- 按钮区域 -->
          <button class="btn btn-light" @click="onBtnClick(-1)">-</button>
          <span class="count">{{ item.count }}</span>
          <button class="btn btn-light" @click="onBtnClick(1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  methods: {
    /*
      1 - onBtnClick()
        通过 dispatch 触发 cart模块的 updateCount 并将当前元素的 id 和新的 count 作为载荷

      2 - cart->actions->updateCount()
        axios发送修改请求(patch)
        修改完成通过 commit 触发 mutations 的updateCount()

      3 - care->mutations->updateCount()
        声明一个goods变量
        通过 find() 找到需要修改的元素并将载荷中的值赋给它
    */
    onBtnClick (step) {
      const newCount = this.item.count + step
      this.$store.dispatch('cart/updateCount', { id: this.item.id, count: newCount })
    }
  },
  props: {
    item: Object
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  + .goods-container {
    border-top: 1px solid #f8f8f8;
  }
  .left {
    .avatar {
      width: 100px;
      height: 100px;
    }
    margin-right: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .title {
      font-weight: bold;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
      .btns {
        .count {
          display: inline-block;
          width: 30px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.6rem;
}
</style>
