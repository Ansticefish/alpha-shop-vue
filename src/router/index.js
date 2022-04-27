import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckoutArea from '../views/CheckoutArea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/step'
  },
  {
    path: '/step',
    name: 'home',
    component: CheckoutArea
  },
  {
    path: '/step/:id',
    name: 'current-step',
    component: CheckoutArea
  }
]

const router = new VueRouter({
  routes
})

export default router
