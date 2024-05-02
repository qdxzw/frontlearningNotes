import { createApp } from "vue";
import App from "./App.vue";
import global from "./global.vue";

// 创建应用
const app = createApp(App);
// 全局组件
app.component("global", global);
// 全局属性
app.config.globalProperties.x = " 全局属性:99";
// 解决ts爆红
declare module "vue" {
  interface ComponentCustomProperties {
    x: string;
  }
}
// 全局方法
app.directive("beauty", (ele, { value }) => {
  ele.innerText += value;
  ele.style.color = "green";
  ele.style.backgroundColor = "yellow";
});
// 挂载应用
app.mount("#app");
