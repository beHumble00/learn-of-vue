<template>
  <div class="login">
    <!-- $router.go(-1) 返回上一页 -->
    <van-nav-bar
      title="会员登录"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
            v-model.trim="phoneNumber"
          />
        </div>
        <div class="form-item">
          <input
            v-model.trim="picCode"
            class="inp"
            maxlength="5"
            placeholder="请输入图形验证码"
            type="text"
          />
          <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode" />
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" />
          <button @click="getCode()" :disabled="isDisabled" :class="{'send-code-btn-disable' : isDisabled}">
            {{ second === totalSecond ? '发送验证码' : second + '秒后发送'}}
          </button>
        </div>
      </div>

      <div class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { getMsgCode, getPicCode } from '@/api/login'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 用户输入的图形验证码
      picCode: '',
      // 请求传递的验证码图片唯一标识
      picKey: '',
      // 图片渲染路径
      picUrl: '',
      totalSecond: 60,
      second: 60,
      timer: null,
      // 发送验证码按钮禁用状态
      isDisabled: false,
      // 手机号
      phoneNumber: ''
    }
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const {
        data: { base64, key }
      } = await getPicCode()
      this.picUrl = base64
      this.picKey = key
    },
    // 获取登录短信验证码
    async getCode () {
      if (!this.verifyFn()) {
        return
      }
      if (!this.timer && this.second === this.totalSecond) {
        await getMsgCode(this.picCode, this.picKey, this.phoneNumber)
        this.$toast('发送成功, 请注意查收')

        this.timer = setInterval(() => {
          this.isDisabled = true
          this.second--

          if (this.second < 1) {
            clearInterval(this.timer)
            this.timer = null
            this.second = this.totalSecond
            this.isDisabled = false
          }
        }, 1000)
      }
    },
    // 登录校验
    verifyFn () {
      if (!this.phoneNumber) {
        this.$toast('请先输入手机号码')
        return false
      }
      if (!/^1[3456789]\d{9}$/.test(this.phoneNumber)) {
        this.$toast('请检查手机号码是否正确')
        return false
      }
      if (!this.picCode) {
        this.$toast('请先输入验证码')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请检查验证码是否正确')
        return false
      }
      return true
    }
  },
  async created () {
    this.getPicCode()
  },
  // 离开页面时销毁定时器
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #1989fa;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #75b5f5, #1989fa);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .send-code-btn-disable {
     color: #b8b8b8 !important;
  }
}
</style>
