<template>
  <ul>
    <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
let { params } = toRefs(route)
</script>

<style scoped>
ul {
  display: inline-block;
}
</style>
