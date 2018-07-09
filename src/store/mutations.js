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
    state.ads = payload.ads
    state.popularList = payload.populNh
    state.newList = payload.newNh
    state.popularFarm = payload.populFarm
    console.log('mainSuccess')
  },
  mainloginStart (state) {
    console.log('mainloginStart!')
  },
  mainloginSuccess (state, payload) {
    state.ads = payload.ads
    state.popularList = payload.populNh
    state.newList = payload.newNh
    state.popularFarm = payload.populFarm
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
    state.nhDetail.myScheduleActiviy = payload.myScheduleActiviy
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
    console.log('addnonghwalBookmarkSuccess')
  }
}
