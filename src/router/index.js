import Vue from 'vue'
import Router from 'vue-router'
import Strategy from 'components/strategy/strategy'
import Cart from 'components/cart/cart'
import Personal from 'components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/strategy'
    },
    {
      path: '/strategy',
      component: Strategy
    },
    {
      path: '/rank',
      component: Cart
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
