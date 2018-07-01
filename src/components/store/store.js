import Vue from 'vue'
import Vuex from 'vuex'
import { popularListGetters } from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    popularList: []
  },
  getters: Object.assign({}, popularListGetters)
})
