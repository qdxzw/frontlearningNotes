<template>
  <div class="app"></div>
</template>

<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw, isReactive } from 'vue'

/* toRaw */
// 响应式对象
let person = reactive({ name: 'tony', age: 18 })
// 原始对象
let rawPerson = toRaw(person)

/* markRaw */
let citysd = markRaw([
  { id: 'asdda01', name: '北京' },
  { id: 'asdda02', name: '上海' },
  { id: 'asdda03', name: '天津' },
  { id: 'asdda04', name: '重庆' }
])
// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
let citys2 = reactive(citysd)
console.log(isReactive(person)) //true
console.log(isReactive(rawPerson)) //false
console.log(isReactive(citys2)) //false
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
