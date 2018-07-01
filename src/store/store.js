import Vue from 'vue'
import Vuex from 'vuex'
import { nonghwalGetters } from './getters.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    popularList: [
      {
        title: '제주 행복 감귤농장 농활',
        detail: '20000원',
        // star: 5,
        // like: true,
        img: require('../assets/logo.png')
      },
      {
        title: '시발 농활',
        detail: '20000원',
        // star: 5,
        // like: true,
        img: require('../assets/logo.png')
      }
    ],
    token: null
  },
  getters: Object.assign({}, nonghwalGetters)
})
