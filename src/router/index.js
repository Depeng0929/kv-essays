import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Check from '../views/check.vue'
import Notice from '../views/notice.vue'
import Render from '../views/render.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/render',
    name: 'Render',
    component: Render
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
