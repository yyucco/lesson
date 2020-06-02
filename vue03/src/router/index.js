import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoA from '../views/TodoA.vue'
import TodoB from '../views/TodoB.vue'
import TodoC from '../views/TodoC.vue'
import TodoC_add from '../views/TodoC/add.vue'
import TodoC_edit from '../views/TodoC/edit.vue'

Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/todoA',
    component: TodoA
  },
  {
    path: '/todoB',
    component: TodoB,
  },
  {
    path: '/todoC',
    component: TodoC
  },
  {
    path: '/todoC/add',
    component: TodoC_add
  },
  {
    path: '/todoC/edit/:id',
    component: TodoC_edit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
