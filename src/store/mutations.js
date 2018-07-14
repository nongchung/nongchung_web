import router from '../router/index'
export const nonghwalMutations = {
  allPopularList (state) {
    console.log('all popular list start')
  },
  dupEmailCheckSuccess (state, payload) {
    console.log(payload)
    state.isDup[0] = payload
  },
  dupNicknameCheckSuccess (state, payload) {
    console.log(payload)
    state.isDup[1] = payload
  },
  isDupOk (state, payload) {
    console.log(payload)
  },
  addReviewSuccess (payload) {
    console.log('addReviewSuccess')
    console.log(payload)
  },
  regSuccess (state) {
    console.log('registerSuccess!')
  },
  loginSuccess (state, payload) {
    console.log('loginSuccess!')
    localStorage.accessToken = payload.token
    state.accessToken = localStorage.accessToken
  },
  logoutClear (state) {
    state.accessToken = null
    delete localStorage.accessToken
  },
  getMyactivitySuccess (state, payload) {
    state.myActivity = payload.data
  },
  getMyInfoSuccess (state, payload) {
    state.userInfo = payload
  },
  getMyhistorySuccess (state, payload) {
    state.totalHistory = payload.total
    state.myHistory = payload.data
  },
  getLikeSuccess (state, payload) {
    state.myLike = payload
  },
  searchStart (state) {
    console.log('searchStart!')
  },
  searchSuccess (state, payload) {
    state.searchResult = payload
    router.push('/Search')
    console.log('searchSucess')
  },
  mainStart (state) {
    console.log('mainStart!')
  },
  mainSuccess (state, payload) {
    // state.home = payload
    state.home.ads = payload.ads
    state.home.popularList = payload.populNh
    state.home.newList = payload.newNh
    state.home.popularFarm = payload.populFarm
    console.log('mainSuccess')
  },
  mainloginStart (state) {
    console.log('mainloginStart!')
  },
  mainloginSuccess (state, payload) {
    // state.home = payload
    state.home.ads = payload.ads
    state.home.popularList = payload.populNh
    state.home.newList = payload.newNh
    state.home.popularFarm = payload.populFarm
    console.log('mainloginSuccess')
  },
  nonghwalDetailStart (state) {
    console.log('nonghwalDetailStart!')
  },
  nonghwalDetailSuccess (state, payload) {
    state.nhDetail.image = payload.image
    state.nhDetail.nhInfo = payload.nhInfo
    state.nhDetail.friendsInfo = payload.friendsInfo
    state.nhDetail.farmerInfo = payload.farmerInfo
    state.nhDetail.schedule = payload.schedule
    state.nhDetail.nearestStartDate = payload.nearestStartDate
    state.nhDetail.allStartDate = payload.allStartDate
    console.log('nonghwalDetailSuccess')
  },
  nonghwalDetailLoginStart (state) {
    console.log('nonghwalDetailLoginStart!')
  },
  nonghwalDetailLoginSuccess (state, payload) {
    state.nhDetail.image = payload.image
    state.nhDetail.nhInfo = payload.nhInfo
    state.nhDetail.friendsInfo = payload.friendsInfo
    state.nhDetail.farmerInfo = payload.farmerInfo
    state.nhDetail.schedule = payload.schedule
    state.nhDetail.nearestStartDate = payload.nearestStartDate
    state.nhDetail.allStartDate = payload.allStartDate
    state.nhDetail.myScheduleActivities = payload.myScheduleActivities
    console.log('nonghwalDetailLoginSuccess')
  },
  nonghwalLocationStart (state) {
    console.log('nonghwalLocationStart!')
  },
  nonghwalLocationSuccess (state, payload) {
    console.log(payload)
    state.nhLocation.location = payload.location
    state.nhLocation.geoLocation = payload.geoLocation
    console.log('nonghwalLocationSuccess')
  },
  addnonghwalBookmarkStart (state) {
    console.log('addnonghwalBookmarkStart')
  },
  addnonghwalBookmarkSuccess (state, payload) {
    state.nhDetail.nhInfo.isBooked = 1
    console.log('addnonghwalBookmarkSuccess')
  },
  deletenonghwalBookmarkStart (state) {
    console.log('deletenonghwalBookmarkStart')
  },
  deletenonghwalBookmarkSuccess (state, payload) {
    state.nhDetail.nhInfo.isBooked = 0
    console.log('deletenonghwalBookmarkSuccess')
  },
  userPersonalInfoStart (state) {
    console.log('userPersonalInfoStart!')
  },
  userPersonalInfoSuccess (state, payload) {
    state.userPersonalInfo = payload[0]
    console.log('userPersonalInfoSuccess')
  },
  nonghwalApplyStart (state) {
    console.log('nonghwalApplyStart!')
  },
  nonghwalApplySuccess (state, payload) {
    state.nonghwalApplyResult.maxPerson = payload.maxPerson
    state.nonghwalApplyResult.currentPerson = payload.currentPerson
    console.log('nonghwalApplySuccess')
  },
  getDetailQnaStart (state) {
    console.log('nonghwalQnaStart!')
  },
  getDetailQnaSuccess (state, payload) {
    console.log('qnaSuccess')
    state.nhDetailQna = payload
  },
  nonghwalCancelStart (state) {
    console.log('nonghwalCancelStart!')
  },
  nonghwalCancelSuccess (state, payload) {
    alert('선택한 농활이 정상적으로 취소되었습니다!')
    const idx = payload.nhIdx
    router.push('/Detail/' + idx) // 이부분 어케하지?
  },
  getnonghwalreview (state, payload) {
    console.log('getnonghwalreviewSuccess')
    state.nhReviewList = payload.rvListInfo
  },
  getParticipantsStart (state) {
    console.log('getParticipantsStart')
  },
  regionListStart (state) {
    console.log('regionListStart!')
  },
  regionListSuccess (state, payload) {
    state.nhRegionList = payload
    console.log('regionListSuccess')
  },
  regionListLoginStart (state) {
    console.log('regionListLoginStart!')
  },
  regionListLoginSuccess (state, payload) {
    state.nhRegionList = payload
    console.log('regionListLoginSuccess')
  },
  morePopulLoginStart (state) {
    console.log('morePopulLoginStart!')
  },
  morePopulLoginSuccess (state, payload) {
    state.home.popularList = state.home.popularList.concat(payload.data)
    state.hasMoreList.popul = payload.isEnd
    console.log('morePopulLoginSuccess')
  },
  morePopulStart (state) {
    console.log('morePopulStart!')
  },
  morePopulSuccess (state, payload) {
    state.home.popularList = state.home.popularList.concat(payload.data)
    state.hasMoreList.popul = payload.isEnd
    console.log('morePopulSuccess')
  },
  moreNewLoginStart (state) {
    console.log('moreNewLoginStart')
  },
  moreNewLoginSuccess (state, payload) {
    state.home.newList = state.home.newList.concat(payload.data)
    state.hasMoreList.new = payload.isEnd
    console.log('moreNewLoginSuccess')
  },
  moreNewStart (state) {
    console.log('moreNewStart')
  },
  moreNewSuccess (state, payload) {
    state.home.newList = state.home.newList.concat(payload.data)
    state.hasMoreList.new = payload.isEnd
    console.log('moreNewSuccess')
  },
  getThemeNH (state, payload) {
    state.themeData = payload
    console.log(state.themeData)
  },
  getSearchResultSuccess (state, payload) {
    state.searchResult = payload
    console.log(state.searchResult)
  }
}
