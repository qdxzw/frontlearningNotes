<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="increment">点我+1</button>
  <button @click="decrement">点我-1</button>
  <hr />
  <img v-for="(u, index) in dogList" :key="index" :src="u" />
  <br />
  <button @click="getDog">再来一只狗</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<script setup lang="ts">
import useSum from '../hooks/useSum'
import useDog from '../hooks/useDog'

let { sum, increment, decrement } = useSum()
let { dogList, getDog } = useDog()
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
