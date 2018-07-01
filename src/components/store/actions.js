import axios from 'axios'

export const nonghwalActions = {
  dupEmail ({commit}) {
    commit('dupEmailStart')
    axios.post('http://localhost:3000/api/dup').then(res => {
      commit('dupCheckSuccess', res.message)
    }).catch(error)
  },
  getAllBoards ({ commit }) {
    commit('allBoards') // 네트워킹 시작을 알림 (mutations)
    axios.get('http://13.125.118.111:3008/board').then(response => {
      commit('allBoardsSuccess', response.data)
    })
  },
  signUp ({ commit }, payload) {
    axios.post('http://13.125.118.111:3008/signup', payload).then(response => {
    // 회원가입 성공 실패 분기
      commit('signUpSuccess')
      console.log(response)
    })
  },
  signIn ({ commit }, payload) {
    axios.post('http://13.125.118.111:3008/signin', payload).then(response => {
      commit('signInSuccess', response.data)
      console.log(response)
    })
  },
  writeBoard ({commit}, payload) {
    console.log(payload)
    axios.post('http://13.125.118.111:3008/board', payload).then(response => {
      console.log(response)
    })
  }
}
