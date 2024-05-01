import { defineStore } from "pinia";
export const useCountStore = defineStore("count", {
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
      school: "atguigu",
    };
  },
  actions: {
    increment(value: number) {
      this.sum += value;
    },
  }, // 计算
  getters: {
    bigSum: (state): number => state.sum * 10,
    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },
});
