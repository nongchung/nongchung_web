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
      router.push('/Login')
    }).catch((error) => {
      console.log(error)
    })
  },
  login ({ commit }, { email, password }) {
    axios.post('http://13.125.216.198:3000/api/signin', { email, password }).then((res) => {
      console.log(res.data.message)
      if (res.data.token) {
        commit('loginSuccess', res.data.token)
        router.push('/')
      } else {
        alert('아이디 또는 패스워드가 틀렸습니다. 다시 입력해주세요')
      }
    }).catch((error) => {
      console.log(error)
      alert('로그인을 다시 시도해주세요')
    })
  },
  logout ({ commit }) {
    commit('logoutClear')
    router.push('/')
  },
  getLike ({ commit }) {
    axios.get('http://13.125.216.198:3000/api/bookmark').then(res => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
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
  nonghwalDetail ({commit}, payload) {
    commit('nonghwalDetailStart')
    axios.get('http://13.125.216.198:3000/api/home/detail/nh?idx=' + payload)
      .then(res => {
        console.log(res.data.message)
        commit('nonghwalDetailSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  },
  nonghwalLocation ({commit}, payload) {
    commit('nonghwalLocationStart')
    axios.get('http://13.125.216.198:3000/api/home/detail/location?idx=' + payload)
      .then(res => {
        console.log(res.data.message)
        console.log(res.data)
        commit('nonghwalLocationSuccess', res.data)
      }).catch(err => {
        console.log('ERROR! :' + err)
      })
  }
}
