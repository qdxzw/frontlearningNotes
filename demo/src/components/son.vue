<template>
  <div>
    <button @click="son">发送消息给父组件</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: "子组件传值给父组件"
    };
  },
  methods: {
    son() {
      this.$emit("son", this.info);
    }
  }
};
</script>
<style>
ul {
  width: 1000px;
  height: 500px;
  background: pink;
}
</style>
