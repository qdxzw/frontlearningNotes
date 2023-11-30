import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyFirstView from '../views/MyFirstView.vue'
import GoodView from '../views/My/GoodView.vue'
import InfoView from '../views/My/InfoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mine/:id',
    name: 'mine',
    props: true,
    component: MyFirstView,
    children: [
      {
        path: 'good',
        name: 'good',
        component: GoodView
      },
      {
        path: 'info',
        name: 'info',
        component: InfoView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log('路由触发了')
//   next()
// })
export default router
