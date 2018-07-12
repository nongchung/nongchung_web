export const nonghwalGetters = {
  // main getters
  getAds (state) {
    return state.home.ads
  },
  getPopularList (state) {
    return state.home.popularList
  },
  getNewList (state) {
    return state.home.newList
  },
  getPopularFarm (state) {
    return state.home.popularFarm
  },
  getAllHome (state) {
    return state.home
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
  getMyActivity (state) {
    return state.myActivity
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
  },
  getuserPersonalInfo (state) {
    return state.userPersonalInfo
  },
  getnonghwalApplyResult (state) {
    return state.nonghwalApplyResult
  },
  getDetailQna (state) {
    return state.nhDetailQna
  },
  getnonghwalreview (state) {
    return state.nhReviewList
  },
  getregionList (state) {
    return state.nhRegionList
  }
}
