<template>
  <button @click="isShow = true">显示弹窗</button>
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>我是一个弹窗</h2>
      <p>我是弹窗中的一些内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="modal">
import { ref } from 'vue'
let isShow = ref(false)
</script>

<style scoped>
.modal {
  width: 300px;
  text-align: center;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: -150px;
}
</style>
