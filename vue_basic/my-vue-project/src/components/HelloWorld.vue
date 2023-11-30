<template>
  <div class="hello">
    <slot>基础的默认内容</slot>
    <h1>{{ msg }}</h1>
    <h1>props的count{{ count }}</h1>
    <button @click="child_1">按钮</button>
    <slot name="footer" :num="num">footer的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // 1.父传子
  props: {
    msg: String,
    count: {
      type: [String, Number],
      default: 100,
      // required: true
    },
  },
  data() {
    return { num: 0 };
  },
  // 子传父
  methods: {
    child_1() {
      this.num++, this.$emit("child_methods", this.num);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
