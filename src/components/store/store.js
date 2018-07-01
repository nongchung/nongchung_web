import Vue from 'vue'
import Vuex from 'vuex'
import { nonghwalGetters } from './getters'
import { nonghwalActions } from './actions'
import { nonghwalMutations } from './mutaions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    popularList: []
  },
  mutations: Object.assign({}, nonghwalMutations),
  actions: Object.assign({}, nonghwalActions),
  getters: Object.assign({}, nonghwalGetters)
})
