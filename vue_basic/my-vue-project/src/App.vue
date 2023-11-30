<template>
  <div id="app">
    <h1>{{ childCount }}</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld>111</HelloWorld> -->
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :count="parentCount"
      @child_methods="parent_methods"
      >阿斯顿
      <!-- <template #footer="dataObj">footer插槽:{{ dataObj.num }}</template> -->
      <template #footer="{ num }">footer插槽:{{ num }}</template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      parentCount: 1100,
      childCount: 0,
    };
  },
  methods: {
    parent_methods(childCount) {
      this.childCount = childCount;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
