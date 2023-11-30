<template>
  <div class="InfoView">
    <h1>详情页面</h1>
  </div>
</template>

<script>
export default {
  name: 'InfoView',
  created () {
    // console.log(this.$route.query)
    console.log(this.$store.state.loginStatus)
  }
}
</script>

<style></style>
