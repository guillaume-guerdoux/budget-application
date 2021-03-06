// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import localforage from 'localforage'
// Import App Custom Styles
// import AppStyles from './css/app.css'
// Import App Component
// import App from './app'
//
import 'bulma/css/bulma.css'
import { App } from './app'
import router from './router'
import store from './store'

require('localforage-startswith')
localforage.config({
  name: 'budgeterbium'
})

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
