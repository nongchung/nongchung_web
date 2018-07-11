// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import starRate from 'vue-star-rating'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.component('star-rating', starRate)

Vue.use(Vuetify, {
  theme: {
    primary: '#3470FF',
    secondary: '#BDBDBD',
    success: '#F25620',
    text: '#4D4D4D',
    info: '#3470FF',
    accent: '#3470FF',
    warning: '#FFAF00'
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
