<template>
  <div class="app">
    <h2>车的品牌：{{ car2.brand }}</h2>
    <h2>车的配置：{{ car2.options }}</h2>
    <button @click="changeBrand()">修改品牌</button>
    <button @click="changeColor()">修改颜色</button>
    <button @click="changeEngine()">修改引擎</button>
    <button @click="changeCar()">修改引擎</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, readonly, shallowReadonly } from 'vue'

let car1 = reactive({
  brand: '迈巴赫',
  options: {
    color: '红色',
    engine: 'v10'
  }
})
let car2 = readonly(car1)
let car3 = shallowReadonly(car1)
function changeBrand () {
  car3.brand = '梅克赛斯'
}
function changeColor () {
  car3.options.color = '白色'
}
function changeEngine () {
  car3.options.engine = 'v12'
}
function changeCar () {
  Object.assign(car3, {
    brand: '大众',
    options: { color: '紫色', engine: 'v9' }
  })
}
</script>

<style scoped>
.app {
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ddd;
}
button {
  margin: 0 5px;
}
</style>
