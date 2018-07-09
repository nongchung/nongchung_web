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

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#0ABD9D',
    secondary: '#BDBDBD',
    success: '#1DE9B6',
    text: '#4D4D4D',
    info: '#0ABD9D',
    accent: '#0ABD9D'
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
