import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";
import Detail from "../pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiang",
          path: "detail/:id/:title/:content",
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});
export default router;
