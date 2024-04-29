<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active"
        ><span>首页</span></RouterLink
      >
      <RouterLink replace to="/news" active-class="active"
        ><span>新闻</span></RouterLink
      >
      <RouterLink replace to="/about" active-class="active"
        ><span>关于</span></RouterLink
      >
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.title {
  text-align: center;
}
.navigate {
  width: 500px;
  text-align: center;
  margin: 0 auto;
}
.navigate span {
  display: inline-block;
  margin-right: 50px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: blanchedalmond;
  text-decoration: none;
  /* color: ; */
}
.main-content {
  margin: 20px auto;
  text-align: center;
  width: 500px;
  height: 200px;
  border: 10px solid;
  background-color: aqua;
}
.active {
  color: salmon;
}
</style>
