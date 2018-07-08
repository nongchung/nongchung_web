export const nonghwalGetters = {
  // main getters
  getAds (state) {
    return state.ads
  },
  getPopularList (state) {
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
  getTotalHistory (state) {
    return state.totalHistory
  },
  getMyHistory (state) {
    return state.myHistory
  },
  getMylike (state) {
    return state.myLike
  },
  isDupCheck (state) {
    return state.isDup
  },
  getSearchResult (state) {
    return state.searchResult
  },
  getNonghwalDetail (state) {
    return state.nhDetail
  },
  getNonghwalLocation (state) {
    return state.nhLocation
  }
}
