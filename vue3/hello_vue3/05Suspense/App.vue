<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>加载中.......</h3>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue'
import { Suspense } from 'vue'
</script>

<style scoped>
.app {
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ddd;
  padding: 0 0 10px;
}
</style>
