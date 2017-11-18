import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from 'components/mainpage/mainpage'
import Mystrategy from 'components/mystrategy/mystrategy'
import Personal from 'components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/mainpage',
      component: Mainpage
    },
    {
      path: '/mystrategy',
      component: Mystrategy
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
