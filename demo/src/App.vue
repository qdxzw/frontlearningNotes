<template>
  <div id="app">
    <son @son="son" />
  </div>
</template>

<script>
import son from "./components/son.vue";
export default {
  name: "App",
  components: { son },
  methods: {
    son(e) {
      console.log(e);
    }
  }
};
console.log("0.1 * 0.4 = "+(0.1*0.4).toFixed(2));
console.log((0.1 + 0.2).toFixed(1));
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
