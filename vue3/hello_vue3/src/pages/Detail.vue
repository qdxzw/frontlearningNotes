<template>
  <ul>
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
let route = useRoute()
let { query } = toRefs(route)
</script>

<style scoped>
ul {
  display: inline-block;
}
</style>
