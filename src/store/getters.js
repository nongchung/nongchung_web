export const nonghwalGetters = {
  // main getters
  getAds (state) {
    return state.ads
  },
  getPopularList (state) {
    console.log('ff ')
    return state.popularList
  },
  getNewList (state) {
    return state.newList
  },
  getPopularFarm (state) {
    return state.popularFarm
  },
  // user getters
  isAuthenticated (state) {
    state.accessToken = state.accessToken || localStorage.accessToken
    return state.accessToken
  },
  getUserInfo (state) {
    return state.userInfo
  },
  getMyhistory (state) {
    return state.myHistory
  },
  isDupCheck (state) {
    return state.isDup
  },
  getSearchResult (state) {
    return state.searchResult
  },
  getNonghwalDetail (state) {
    console.log('getget')
    return state.nhDetail
  },
  getNonghwalLocation (state) {
    return state.nhLocation
  }
}
