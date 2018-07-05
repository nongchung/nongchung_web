// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAgile from 'vue-agile'
import VeeValidate from 'vee-validate'

Vue.use(VueAgile)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VeeValidate,
  components: { App },
  template: '<App/>'
})
