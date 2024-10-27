/* eslint-disable */
<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
      sum: 0,
      inputValue: 1
    }
  },
  methods: {
    selectValue() {
      console.log(this.inputValue)
    },
    increment() {
      this.sum = this.sum + this.inputValue
    },
    decrement() {
      this.sum = this.sum - this.inputValue
    },
    incrementOdd() {
      if (this.sum % 2 != 0) {
        this.sum = this.sum + this.inputValue
      } else {
        alert('不是奇数')
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum = this.sum + this.inputValue
      }, 1000)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
