// // 引入defineStore用于创建store
// import { defineStore } from "pinia";
// import axios from "axios";
// import { nanoid } from "nanoid";

// // 定义并暴露一个store
// export const useTalkStore = defineStore("talk", {
//   // 动作
//   actions: {
//     // 方法
//     async getLoveTalk() {
//       // 发请求
//       let result = await axios.get(
//         "https://api.uomg.com/api/rand.qinghua?format=json"
//       );
//       // 把请求回来的字符串，包装成一个对象
//       let obj = { id: nanoid(), title: result.data.content };
//       this.talkList.unshift(obj);
//     },
//   },
//   // 状态
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
// });
import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";

export const useTalkStore = defineStore("talk", () => {
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );

  // getATalk函数相当于action
  async function getLoveTalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    // 把请求回来的字符串，包装成一个对象
    let obj = { id: nanoid(), title };
    // 放到数组中
    talkList.unshift(obj);
  }
  return { talkList, getLoveTalk };
});
