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
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#00BFA5',
    secondary: '#BDBDBD',
    accent: '#26A69A',
    error: '#FF3D00',
    warning: '#E0E0E0',
    info: '#000000',
    success: '#1DE9B6'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VeeValidate,
  components: { App },
  template: '<App/>'
})
