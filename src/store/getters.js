export const nonghwalGetters = {
  getPopularList (state) {
    return state.popularList
  },
  isAuthenticated (state) {
    return state.accessToken
  },
  isDupCheck (state) {
    return state.isDup
  }
}
