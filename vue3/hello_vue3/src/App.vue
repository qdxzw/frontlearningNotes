<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import { ref } from 'vue'
import useMsgRefs from './useMsgRefs'
// let msg = ref('你好')
let { msg } = useMsgRefs('你好', 1000)
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
