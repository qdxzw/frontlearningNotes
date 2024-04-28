<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- <RouterLink to="/news/detail">{{ news.title }}</RouterLink> -->
        <!-- 第一种写法（字符串） -->
        <!-- <RouterLink
          :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"
          >{{ news.title }}</RouterLink
        > -->
        <!-- 第二种写法（对象） -->
        <RouterLink
          :to="{
            path: '/news/detail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content
            }
          }"
        >
          {{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <div class="news-detail">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
let newsList = reactive([
  { id: 'dawd1', title: '1', content: '11' },
  { id: 'dawd2', title: '2', content: '22' },
  { id: 'dawd3', title: '3', content: '33' }
])
</script>

<style scoped>
li {
  text-align: left;
  list-style: none;
}
.news {
  display: flex;
  justify-content: space-around;
}
</style>
