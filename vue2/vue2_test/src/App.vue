<template>
  <div id="app"><Person v-if="isshow" /></div>
</template>

<script>
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    Person
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
