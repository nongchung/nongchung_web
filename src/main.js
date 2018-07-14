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
import * as VueGoogleMaps from 'vue2-google-maps'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBtXiCWRiR8vE2nLF_DKv5WZDYz4glfKTI',
    libraries: 'places' // necessary for places input
  }
})

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.component('star-rating', starRate)

export const eventBus = new Vue()

Vue.use(Vuetify, {
  theme: {
    primary: '#3470FF', // 파랑
    secondary: '#EFEFEF', // 옅은회식
    success: '#00BD43', // 초록
    text: '#4D4D4D',
    info: '#E9EFFF', // 옅은파랑
    accent: '#3470FF', // 파랑
    warning: '#FFAF00', // 노랑
    error: '#F25620' // 주황(빨강)
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

Vue.prototype.$EventBus = new Vue()
