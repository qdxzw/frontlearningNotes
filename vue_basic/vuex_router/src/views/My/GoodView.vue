import { Store } from 'vuex'; import { useRouter } from
'vue-router/types/composables'; import { useRouter } from
'vue-router/types/composables';
<template>
  <div class="GoodView">
    <h1>点赞页面</h1>
  </div>
</template>

<script>
export default {
  name: 'GoodView',
  created() {
    // setTimeout(() => {
    //   // this.$router.push({ name: 'home' })
    //   // 路由切换时，进行数据传递
    //   this.$router.push({ name: 'info', query: { someData: 'good的数据' } })
    // }, 3000)
    console.log(this.$store.state.loginStatus)
    this.handler()
  },
  methods: {
    handler() {
      this.$store.commit('changeCount', 1)
      this.$store.commit('changeCount', 2)
      this.$store.dispatch('delayChangeCount', 10)
      this.$store.commit('changeCount', 3)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
    }
  }
}
</script>

<style></style>
