<template>
  <div id="app">
    <!-- <Person v-if="isshow" /> -->
    <CountComponent></CountComponent>
  </div>
</template>

<script>
import Person from './components/Person.vue'
import CountComponent from './components/CountComponent.vue'

export default {
  name: 'App',
  components: {
    Person,
    CountComponent
  },
  data () {
    return {
      isshow: true
    }
  }
}
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
