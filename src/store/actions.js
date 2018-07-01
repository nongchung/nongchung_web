import axios from 'axios'

export const nonghwalActions = {
  dupEmail ({commit}) {
    commit('dupEmailStart')
    axios.post('http://localhost:3000/api/dup').then(res => {
      commit('dupCheckSuccess', res.message)
    })
  }
}
