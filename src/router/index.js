import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Checkout from '../views/checkout.vue'
import { Constants } from '../mocks/constants.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: Constants.routes.HOME,
      component: Home
    },
    {
      path: '/' + Constants.routes.LIST + '/:id',
      name: Constants.routes.LIST,
      component: List,
      props: true
    },
    {
      path: '/' + Constants.routes.CART,
      name: Constants.routes.CART,
      component: Cart,
      props: true
    },
    {
      path: '/' + Constants.routes.DETAIL + '/:folder/:id',
      name: Constants.routes.DETAIL,
      component: Detail,
      props: true
    },
    {
      path: '/' + Constants.routes.CHECKOUT,
      name: Constants.routes.CHECKOUT,
      component: Checkout,
      props: true
    }
  ]
})
