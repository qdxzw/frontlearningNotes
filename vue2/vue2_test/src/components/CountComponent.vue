/* eslint-disable */
<template>
  <div>
    <h1>当前求和为{{ $store.state.sum }}</h1>
    <select v-model.number="inputValue" @change="selectValue">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 1
    }
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    selectValue() {
      console.log(this.inputValue)
    },
    increment() {
      this.$store.commit('jia', this.inputValue)
    },
    decrement() {
      this.$store.commit('jian', this.inputValue)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.inputValue)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.inputValue)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
