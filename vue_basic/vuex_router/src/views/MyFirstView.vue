<template>
  <div class="MyFirstView">
    <h1>我的组件</h1>
    <p>我的id为{{ id }}</p>
    <router-link :to="{ name: 'good', params: { id: 20 } }">点赞</router-link>
    <router-link :to="{ name: 'info', params: { id: 20 } }">详情</router-link>
    <!-- <router-link to="20/good">点赞</router-link>
    <router-link to="20/info">详情</router-link> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MyFirstView',
  props: ['id']
}
</script>

<style></style>
