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
    }).catch()
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
    }).catch()
  },
  register ({ commit }, { email, password, nickname, name, sex, handphone, birth }) {
    axios.post('http://13.125.216.198:3000/api/signup', { email, password, nickname, name, sex, handphone, birth }).then(res => {
      console.log(res.data.message)
      commit('regSuccess')
      router.push('/Login')
    }).catch()
  },
  login ({ commit }, { email, password }) {
    axios.post('http://13.125.216.198:3000/api/signin', { email, password }).then(res => {
      console.log(res.data.message)
      console.log(res.data.token)
      if (res.data.token) {
        commit('loginSuccess', res.data.token)
        router.push('/')
      } else if (res.data.message === 'Null Value') {
        alert('아이디와 패스워드를 모두 입력하세요')
      } else if (res.data.message === 'Fail To Sign In') {
        alert('아이디 또는 패스워드가 틀렸습니다. 다시 입력해주세요')
      } else {
        alert('로그인에 실패하였습니다. 다시 시도해주세요')
      }
    }).catch()
  },
  logout ({ commit }) {
    commit('logoutClear')
    router.push('/')
  },
  getLike ({ commit }) {
    axios.get('http://13.125.216.198:3000/api/bookmark').then(res => {
      console.log(res.data)
    })
  }
}
