<template>
  <div class="outer">
    <h2>我是父组件</h2>
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
    <br />
    <modal></modal>
  </div>
</template>

<script setup lang="ts" name="App">
import modal from './modal.vue'
</script>

<style scoped>
.outer {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ddd;
  filter: saturate(200%);
}
img {
  width: 180px;
}
button {
  margin: 0 5px;
}
</style>
