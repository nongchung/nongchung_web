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
    console.log(payload)
    localStorage.accessToken = payload
    state.accessToken = localStorage.accessToken
    // console.log(payload.data[0].mail)
    // state.userInfo[0] = { 'mail': payload.data[0].mail }
    // state.userInfo[1] = { 'name': payload.data[0].name }
    // state.userInfo[2] = { 'point': payload.data[0].point }
    // state.userInfo[3] = { 'img': payload.data[0].img }

    // console.log(state.userInfo)
  },
  logoutClear (state) {
    state.accessToken = null
    delete localStorage.accessToken
  },
  getMyInfoSuccess (state, payload) {
    state.userInfo[0] = payload.mail
    state.userInfo[1] = payload.name
    state.userInfo[2] = payload.point
    state.userInfo[3] = payload.img
  },
  getMyhistorySuccess (state, payload) {
    state.myHistory[1] = payload.data
    state.myHistory[0] = payload.total
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
  nonghwalLocationStart (state) {
    console.log('nonghwalLocationStart!')
  },
  nonghwalLocationSuccess (state, payload) {
    console.log(payload)
    state.nhLocation.location = payload.location
    state.nhLocation.geoLocation = payload.geoLocation
    console.log('nonghwalLocationSuccess')
  }
}
