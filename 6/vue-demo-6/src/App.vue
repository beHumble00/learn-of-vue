<template>
  <div>
    <div class="footer_wrap">
      <!-- 
      如果使用 a 标签做高亮太麻烦
        vue-router 提供了一个全局组件 router-link 以取代 a 标签
        默认会提供高亮类名, 可以直接设置高亮样式
          语法:(无需带 # )
          <router-link to="/path"></>
     -->

      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
/* 
  使用router-link跳转后，我们发现。当前点击的链接默认加了两个class的值 ``和`router-link-active`
    router-link-exact-active : 
      **精确匹配**
      to="/my" 仅可以匹配  /my

    router-link-active : 
      **模糊匹配（用的多）**
      to="/my"  可以匹配 /my    /my/a    /my/b    ....  
      只要是以/my开头的路径 都可以和 to="/my"匹配到

  我们可以给任意一个class属性添加高亮样式即可实现功能

   也可以在 router 配置时自定义这两个类名
    linkActiveClass: 'active', // 配置模糊匹配的类名
    linkExactActiveClass: 'exact-active' // 配置精确匹配的类名
*/
.footer_wrap a.router-link-active {
  background-color: palevioletred;
  transition: all 0.2s;
}
</style>