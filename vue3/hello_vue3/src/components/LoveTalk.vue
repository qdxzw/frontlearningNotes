<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import { useTalkStore } from '@/store/talk'
// pinia提供的storeToRefs只会将数据做转换，而Vue的toRefs会转换store中所有数据包括方法
import { storeToRefs } from 'pinia'
// 数据
let talkStore = useTalkStore()
let { talkList } = storeToRefs(talkStore)
// mutate：本次修改的信息
// state：真正修改的数据
talkStore.$subscribe((mutate, state) => {
  // console.log('####', talkList)
  // console.log('LoveTalk', mutate, state)
  localStorage.setItem('talkList', JSON.stringify(talkList.value))
})
// 方法
function getLoveTalk () {
  talkStore.getLoveTalk()
}
</script>
<style scoped>
.talk {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: orange;
}
select,
button {
  margin: 0px 5px;
  height: 25px;
}
</style>
