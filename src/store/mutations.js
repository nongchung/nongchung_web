export const nonghwalMutations = {
  allPopularList (state) {
    console.log('all popular list start')
  },
  dupCheckStart (state) {
    console.log('dupCheckEmailStart!')
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
  registerStart (state) {
    console.log('registerStart!')
  },
  regSuccess (state) {
    console.log('registerSuccess!')
  },
  loginStart () {
    console.log('loginStart!')
  },
  loginSuccess (state, payload) {
    console.log('loginSuccess!')
    localStorage.accessToken = payload
  }
}
