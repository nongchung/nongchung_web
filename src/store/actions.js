import axios from 'axios'
import router from '../router/index'

export const nonghwalActions = {
  dupEmail ({ commit }, payload) {
    const email = payload.email
    axios.post('http://13.125.216.198:3000/api/dup-email', { email }).then(res => {
      // commit('dupCheckSuccess', res)
      if (res.data.message === 'duplication') {
        alert('중복된 이메일입니다. 새로운 이메일을 입력하세요')
        commit('dupEmailCheckSuccess', false)
      } else if (res.data.message === 'available') {
        alert('사용가능한 이메일입니다.')
        commit('dupEmailCheckSuccess', true)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  dupNickname ({ commit }, payload) {
    const nickname = payload.nickname
    axios.post('http://13.125.216.198:3000/api/dup-nickname', { nickname }).then(res => {
      console.log(res.data.message)
      if (res.data.message === 'duplication') {
        alert('중복된 닉네임입니다. 새로운 닉네임을 입력하세요')
        commit('dupNicknameCheckSuccess', false)
      } else if (res.data.message === 'available') {
        alert('사용가능한 닉네임입니다.')
        commit('dupNicknameCheckSuccess', true)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  register ({ commit }, { email, password, nickname, name, sex, handphone, birth }) {
    axios.post('http://13.125.216.198:3000/api/signup', { email, password, nickname, name, sex, handphone, birth }).then(res => {
      console.log(res.data.message)
      commit('regSuccess')
      //   router.push('/Login')
    }).catch((error) => {
      if (error.response.data.message === 'Null Value') alert('모든 값을 채워주세요')
      else {
        console.log(error.response.data.message)
        alert('잠시후 다시 시도해주세요')
      }
    })
  },
  updateMyInfo ({commit}, {nickname}) {
    axios.put('http://13.125.216.198:3000/api/mypage/nickname', {nickname}).then(res => {
      console.log(res.data.message)
      commit('updateSuccess')
    }).catch(err => {
      console.log(err.response.data.message)
    })
  },
  login ({ state, commit }, { email, password }) {
    console.log('여기 들어오는뎅?')
    axios.post('http://13.125.216.198:3000/api/signin', {
      email,
      password
    }).then((res) => {
      if (res.data.token) {
        commit('loginSuccess', res.data)
        router.push('/')
      }
    }).catch((error) => {
      console.log(error.response.data.message)
      if (error.response.data.message === 'Null Value') {
        alert('아이디 또는 패스워드가 틀렸습니다. 다시 입력해주세요')
      } else {
        alert('로그인을 다시 시도해주세요')
      }
    })
  },
  logout ({ commit }) {
    commit('logoutClear')
    router.push('/')
  },
  getMyhistory ({ state, commit }) {
    axios.get('http://13.125.216.198:3000/api/activity/complete', {
      headers: {
        token: state.accessToken
      }
    }).then(res => {
      commit('getMyhistorySuccess', res.data)
    }).catch(err => {
      console.log(err.message)
    })
  },
  getLike ({ state, commit }) {
    axios.get('http://13.125.216.198:3000/api/bookmark', {
      headers: { token: state.accessToken }
    }).then(res => {
      commit('getLikeSuccess', res.data.bmList)
    }).catch((error) => {
      console.log(error)
    })
  },
  getMyInfo ({ state, commit }) {
    axios.get('http://13.125.216.198:3000/api/mypage', {
      headers: {
        token: state.accessToken
      }
    }).then(res => {
      commit('getMyInfoSuccess', res.data.data[0])
    }).catch(err => {
      console.log(err.message)
    })
  },
  writeReview ({ state, commit }, payload) {
    console.log(payload)
    axios.post('http://13.125.216.198:3000/api/review', {
      headers: { token: state.accessToken },
      body: { payload }
    }).then(res => {
      commit('writeReviewSuccess', res.data)
    }).catch(err => {
      console.log(err.response.data.message)
    })
  },
  search ({ commit }, payload) {
    commit('searchStart')
    axios.get('http://13.125.216.198:3000/api/home/search?' + 'start=' + payload.start + '&end=' + payload.end + '&person=' + payload.person + '&scontent=' + payload.scontent)
      .then(res => {
        console.log(res.data.message)
        commit('searchSuccess', res.data.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  getMain ({ commit }) {
    commit('mainStart')
    axios.get('http://13.125.216.198:3000/api/home')
      .then(res => {
        console.log(res.data.message)
        commit('mainSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  getMainLogin ({ state, commit }) {
    commit('mainloginStart')
    axios.get('http://13.125.216.198:3000/api/home', {
      headers: {token: state.accessToken}
    })
      .then(res => {
        console.log(res.data.message)
        commit('mainloginSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  nonghwalDetail ({ commit }, payload) {
    commit('nonghwalDetailStart')
    axios.get('http://13.125.216.198:3000/api/home/detail/nh?idx=' + payload)
      .then(res => {
        console.log(res.data.message)
        commit('nonghwalDetailSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  nonghwalDetailLogin ({ state, commit }, payload) {
    commit('nonghwalDetailLoginStart')
    axios.get('http://13.125.216.198:3000/api/home/detail/nh?idx=' + payload, {
      headers: {token: state.accessToken}
    })
      .then(res => {
        console.log(res.data.message)
        commit('nonghwalDetailLoginSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  nonghwalLocation ({ commit }, payload) {
    commit('nonghwalLocationStart')
    axios.get('http://13.125.216.198:3000/api/home/detail/location?idx=' + payload)
      .then(res => {
        console.log(res.data.message)
        console.log(res.data)
        commit('nonghwalLocationSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  addnonghwalBookmark ({state, commit}, payload) {
    commit('addnonghwalBookmarkStart')
    axios({ method: 'POST', url: 'http://13.125.216.198:3000/api/bookmark', headers: {token: state.accessToken}, data: { nhIdx: payload } }).then(res => {
      console.log(res.data.message)
      commit('addnonghwalBookmarkSuccess', res.data.message)
    }).catch(err => {
      console.log('ERROR! :' + err)
    })
  },
  deletenonghwalBookmark ({state, commit}, payload) {
    commit('deletenonghwalBookmarkStart')
    axios({ method: 'DELETE', url: 'http://13.125.216.198:3000/api/bookmark', headers: {token: state.accessToken}, data: { nhIdx: payload } }).then(res => {
      console.log(res.data.message)
      commit('deletenonghwalBookmarkSuccess', res.data.message)
    }).catch(err => {
      console.log('ERROR! :' + err)
    })
  },
  userPersonalInfo ({state, commit}) {
    commit('userPersonalInfoStart')
    axios.get('http://13.125.216.198:3000/api/home/request/user', {
      headers: {token: state.accessToken}
    }).then(res => {
      commit('userPersonalInfoSuccess', res.data.data)
    }).catch(err => {
      console.log('ERROR! :' + err)
    })
  },
  nonghwalApply ({state, commit}, payload) {
    console.log(payload)
    commit('nonghwalApplyStart')
    axios({ method: 'POST', url: 'http://13.125.216.198:3000/api/home/request', headers: {token: state.accessToken}, data: payload }).then(res => {
      console.log(res.data.message)
      commit('nonghwalApplySuccess', res.data)
    }).catch(err => {
      console.log('ERROR! :' + err.message)
      if (err.response.data.message) {
        alert('신청오류')
        router.push('/')
      }
    })
  }
}
