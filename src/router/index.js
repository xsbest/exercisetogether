import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetail.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/userInfo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import(/* webpackChunkName: "about" */ '../views/Talk.vue')
  },
  {
    path: '/mark',
    name: 'Mark',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mark.vue')
  },
  {
    path: '/markdetail',
    name: 'MarkDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarkDetail.vue')
  },
  {
    path: '/MySportHistory',
    name: 'MySportHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/MySportHistory.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
