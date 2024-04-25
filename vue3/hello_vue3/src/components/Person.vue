<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到80cm，则联系服务器</h1>
    <h2>水温：{{ temp }}</h2>
    <h2>水位：{{ height }}</h2>
    <button @click="changePrice">水温+10</button>
    <button @click="changeSum">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue'
// 数据
let temp = ref(10)
let height = ref(10)

// 方法
function changePrice () {
  temp.value += 10
}
function changeSum () {
  height.value += 10
}

// 用watch实现，需要明确的指出要监视：temp、height
// watch([temp, height], value => {
//   // 从value中获取最新的temp值、height值
//   const [newTemp, newHeight] = value
//   // 室温达到50℃，或水位达到20cm，立刻联系服务器
//   if (newTemp >= 50 || newHeight >= 80) {
//     console.log('联系服务器')
//   }
// })

// 用watchEffect实现
watchEffect(() => {
  // 室温达到50℃，或水位达到80cm，立刻联系服务器
  if (temp.value >= 50 || height.value >= 80) {
    console.log('联系服务器1')
  }
  // if (temp.value >= 50) {
  //   console.log('联系服务器1')
  // }
  // if (height.value >= 80) {
  //   console.log('联系服务器2')
  // }
})
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
