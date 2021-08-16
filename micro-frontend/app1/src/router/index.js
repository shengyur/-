import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// /src/router/index.js
// ...
const router = new VueRouter({
  mode: 'history',
  // 通过环境变量来配置路由的 base url
  base: process.env.VUE_APP_BASE_URL,
  routes
})
// ...



export default router
