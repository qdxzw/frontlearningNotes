<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeSum()">修改和</button>
    <button @click="changeName()">修改名字</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="changePerson()">修改整个人</button>
    <br />
    <h2>车的品牌：{{ car.brand }}</h2>
    <h2>车的配置：{{ car.options }}</h2>
    <button @click="changeBrand()">修改品牌</button>
    <button @click="changeColor()">修改颜色</button>
    <button @click="changeEngine()">修改引擎</button>
    <button @click="changeCar()">修改引擎</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, shallowRef, shallowReactive } from 'vue'
let sum = ref(0)
let person = shallowRef({
  name: '张三',
  age: 18
})
let car = shallowReactive({
  brand: '迈巴赫',
  options: {
    color: '红色',
    engine: 'v10'
  }
})
function changeSum () {
  sum.value += 1
}
function changeName () {
  person.value.name = '李四'
}
function changeAge () {
  person.value.age += 1
}
function changePerson () {
  person.value = { name: '王五', age: 100 }
}
function changeBrand () {
  car.brand = '梅克赛斯'
}
function changeColor () {
  car.options.color = '白色'
}
function changeEngine () {
  car.options.engine = 'v12'
}
function changeCar () {
  Object.assign(car, {
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
