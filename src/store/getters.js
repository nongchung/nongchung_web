export const nonghwalGetters = {
  getPopularList (state) {
    return state.popularList
  },
  isAuthenticated (state) {
    return state.token
  }
}
