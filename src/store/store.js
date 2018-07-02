import Vue from 'vue'
import Vuex from 'vuex'
import { nonghwalGetters } from './getters.js'
import { nonghwalMutations } from './mutations.js'
import { nonghwalActions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isDup: [null, null],
    popularList: [{
      title: '제주 행복 감귤농장 농활',
      detail: '20000원',
      // star: 5,
      // like: true,
      img: require('../assets/logo.png')
    },
    {
      title: '행복 농활',
      detail: '20000원',
      // star: 5,
      // like: true,
      img: require('../assets/logo.png')
    }
    ],
    accessToken: null
  },
  getters: Object.assign({}, nonghwalGetters),
  actions: Object.assign({}, nonghwalActions),
  mutations: Object.assign({}, nonghwalMutations)
})
