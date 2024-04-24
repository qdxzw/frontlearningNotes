<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>性别：{{ person.gender }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeGender">修改性别</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, toRefs, toRef } from 'vue'

// 数据
let person = reactive({ name: '张三', age: 18, gender: '男' })

// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
let { name, gender } = toRefs(person)

// 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
let age = toRef(person, 'age')

// 方法
function changeName () {
  name.value += '~'
}
function changeAge () {
  age.value += 1
}
function changeGender () {
  gender.value = '女'
}
</script>

<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0px 5px;
}
</style>
