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
    localStorage.accessToken = payload.token
    state.accessToken = localStorage.accessToken
    console.log(payload.mail)
    state.userInfo[0] = { 'mail': payload.mail }
    state.userInfo[1] = { 'name': payload.name }
    state.userInfo[2] = { 'point': payload.point }
    state.userInfo[3] = { 'img': payload.img }

    console.log(state.userInfo)
  },
  logoutClear (state) {
    state.accessToken = null
    delete localStorage.accessToken
  },
  getMyInfoSuccess (state, payload) {
    console.log(payload.mail)
    state.userInfo[0] = { 'mail': payload.mail }
    state.userInfo[1] = { 'name': payload.name }
    state.userInfo[2] = { 'point': payload.point }
    state.userInfo[3] = { 'img': payload.img }

    console.log(state.userInfo)
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
    state.nhDetail.nhInfo = payload.nhInfo
    state.nhDetail.farmerInfo = payload.farmerInfo
    state.nhDetail.schedule = payload.schedule
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
