<template>
  <div class="person">
    <h1>尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3>Vue</h3>
    <button @click="showLog">点我输出这个元素</button>
  </div>
</template>

<!-- 子组件Person.vue中要使用defineExpose暴露内容 -->
<script lang="ts" setup name="Person">
import { ref, defineExpose } from 'vue'
// 数据
let title2 = ref()
let name = ref('张三')
let age = ref(18)
/****************************/
/****************************/
function showLog () {
  console.log(title2.value)
}
// 使用defineExpose将组件中的数据交给外部
defineExpose({ name, age })
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
