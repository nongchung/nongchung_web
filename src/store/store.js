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
    userInfo: [],
    myHistory: [],
    myLike: [],
    // search state
    searchResult: [],
    home: {ads: [],
      popularList: [],
      newList: [],
      popularFarm: []},
    nhDetail: {image: [], nhInfo: [], friendsInfo: [], farmerInfo: [], schedule: [], nearestStartDate: [], allStartDate: [], myScheduleActivities: []},
    nhLocation: {location: [], geoLocation: []},
    userPersonalInfo: [],
    nonghwalApplyResult: {maxPerson: [], currentPerson: []},
    nhDetailQna: []
  },
  getters: Object.assign({}, nonghwalGetters),
  actions: Object.assign({}, nonghwalActions),
  mutations: Object.assign({}, nonghwalMutations)
})
