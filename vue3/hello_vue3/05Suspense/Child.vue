<template>
  <div class="child">
    <h2>Child组件</h2>
    <h3>当前求和为：{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
import axios from 'axios'
let sum = ref(0)
let {
  data: { content }
} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(content)
</script>

<style scoped>
.child {
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: skyblue;
  padding: 0 0 10px;
}
</style>
