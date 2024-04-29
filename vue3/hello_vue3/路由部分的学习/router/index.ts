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
          // 第一种(传递值给路由组件)：props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
          // props:{a:1,b:2,c:3},

          // 第二种(只适用于props)：props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
          props: true,

          // 第三种(适用于props、query)：props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
          // props(route) {
          //   return route.query;
          // },
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
export default router;
