import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

import './assets/normalize.css'
import './assets/theme.css'
import './assets/scss/main.scss'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
