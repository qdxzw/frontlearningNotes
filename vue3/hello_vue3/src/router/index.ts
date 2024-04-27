import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";

const router = createRouter({
  history: createWebHistory(), //history模式
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
export default router;
