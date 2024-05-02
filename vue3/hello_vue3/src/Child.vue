<template>
  <div class="child">
    <h2>Child组件{{ x }}</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <h2 v-beauty="sum">好开心</h2>
    <global></global>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
let sum = ref(0)
</script>

<style scoped>
.child {
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: skyblue;
  padding: 0 0 10px;
}
</style>
