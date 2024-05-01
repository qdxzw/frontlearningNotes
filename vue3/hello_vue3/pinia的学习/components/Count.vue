<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大十倍：{{ bigSum }}</h2>
    <h2>学校：{{ school }}，学校(大写)：{{ upperSchool }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
/* 引入storeToRefs */
import { storeToRefs } from 'pinia'
// 数据
let sumStore = useCountStore()
let n = ref(1) //用户选择的数据
const { increment } = sumStore
let { sum, school, bigSum, upperSchool } = storeToRefs(sumStore)
// 方法
function add () {
  // 第一种修改方式
  // sumStore.sum += n.value
  // 第二种（批量修改）
  // sumStore.$patch({
  //   sum: 10
  // })
  // 第三种（action修改）
  sumStore.increment(n.value)
}
function minus () {
  sumStore.sum -= n.value
}
</script>

<style scoped>
.count {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: skyblue;
}
select,
button {
  margin: 0px 5px;
  height: 25px;
}
</style>
