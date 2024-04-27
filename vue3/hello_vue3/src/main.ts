// // 引入createApp用于创建应用（买个盆）
// import { createApp } from "vue";
// // 引入App根组件（买个根）
// import App from "./App.vue";
// // 将根放在盆里，并将盆放在id为app的div位置上
// createApp(App).mount("#app");

// 引入createApp用于创建应用（买个盆）
import { createApp } from "vue";
import router from "./router/index";
// 引入App根组件（买个根）
import App from "./App.vue";
const app = createApp(App);
app.use(router);
app.mount("#app");
