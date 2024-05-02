<template>
  <div class="app">
    <h3>我是App组件{{ x }}</h3>
    <global></global>
    <child></child>
  </div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue'
</script>

<style scoped>
.app {
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ddd;
  padding: 0 0 10px;
}
</style>
