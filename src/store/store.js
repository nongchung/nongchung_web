import Vue from 'vue'
import Vuex from 'vuex'
import { nonghwalGetters } from './getters.js'
import { nonghwalMutations } from './mutations.js'
import { nonghwalActions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // user state
    isDup: [null, null],
    userInfo: [null, null, null, null],
    // main state
    ads: [],
    popularList: [],
    newList: [],
    popularFarm: [],
    accessToken: null,
    // search state
    searchResult: [],
    nhDetail: {nhInfo: null, farmerInfo: null, scheduleInfo: null},
    nhLocation: {location: null, geoLocation: null}
  },
  getters: Object.assign({}, nonghwalGetters),
  actions: Object.assign({}, nonghwalActions),
  mutations: Object.assign({}, nonghwalMutations)
})
