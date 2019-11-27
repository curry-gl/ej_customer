import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home/home'
import Order from '../views/order/order'
import User from '../views/user/user'
import Index from '../views/index'
import Orders from '../views/Orders/placeOrders'
import Address from '../views/address/address'
import editAddress from '../views/address/editAddress'
import orderdetial from '../views/Orders/orderdetial'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/Address',
    name: 'Address',
    component: Address
  },
  {
    path: '/editAddress',
    name: 'editAddress',
    component: editAddress
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: 'home',
        component: Home
      },
      {
        path: 'order',
        component: Order
      },
      {
        path: 'user',
        component: User
      },
    ]
  },
  {
    path: '/orderdetial',
    name: 'orderdetial',
    component: orderdetial
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
