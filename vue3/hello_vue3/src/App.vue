<!-- 父组件App.vue -->
<template>
  <Person ref="ren" />
  <button @click="test">测试</button>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue'

let ren = ref()

function test () {
  console.log(ren.value)
  // console.log(ren.value.name)
  // console.log(ren.value.age)
}
</script>
