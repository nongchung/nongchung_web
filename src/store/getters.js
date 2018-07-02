export const nonghwalGetters = {
  getPopularList (state) {
    return state.popularList
  },
  isAuthenticated (state) {
    state.accessToken = state.accessToken || localStorage.accessToken
    return state.accessToken
  },
  isDupCheck (state) {
    return state.isDup
  }
}
