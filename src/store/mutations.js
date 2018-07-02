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
    localStorage.accessToken = payload
    state.accessToken = state.accessToken || localStorage.accessToken
  },
  logoutClear (state) {
    state.accessToken = null
    delete localStorage.accessToken
  }
}
