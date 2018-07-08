import Vue from 'vue'
import Vuex from 'vuex'
import { nonghwalGetters } from './getters.js'
import { nonghwalMutations } from './mutations.js'
import { nonghwalActions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // user state
    accessToken: null,
    totalHistory: null,
    isDup: [null, null],
    // userInfo: [],
    userInfo: null,
    myHistory: [],
    myLike: [],
    // main state
    ads: [],
    popularList: [],
    newList: [],
    popularFarm: [],
    // search state
    searchResult: [],
    nhDetail: {image: null, nhInfo: null, friendsInfo: null, farmerInfo: null, schedule: null, nearestStartDate: null, allStartDate: null},
    nhLocation: {location: null, geoLocation: null}
  },
  getters: Object.assign({}, nonghwalGetters),
  actions: Object.assign({}, nonghwalActions),
  mutations: Object.assign({}, nonghwalMutations)
})
