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
    component: CheckoutArea,
    // children: [
    //   {
    //     path: '1',
    //     component: () => import('../components/FormOne.vue')
    //   },
    //   {
    //     path: '2',
    //     component: () => import('../components/FormTwo.vue')
    //   },
    //   {
    //     path: '3',
    //     component: () => import('../components/FormThree.vue')
    //   }
    // ]
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
