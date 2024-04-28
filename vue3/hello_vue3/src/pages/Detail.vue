<template>
  <ul>
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
defineProps(['id', 'title', 'content'])
</script>

<style scoped>
ul {
  display: inline-block;
}
</style>
