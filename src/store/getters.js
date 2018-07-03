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
    return state.accessToken
  },
  isDupCheck (state) {
    return state.isDup
  },
  getSearchResult (state) {
    return state.searchResult
  }
}
