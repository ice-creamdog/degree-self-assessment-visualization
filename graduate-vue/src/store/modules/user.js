// import { Module } from 'vuex'
// import { RootState } from '@/store/types'
// import { UserModuleTypes } from '@/store/modules/user/types'

// const userModule: Module<UserModuleTypes, RootState> = {
//   namespaced: true,
//   state: {
//     token: localStorage.getItem('token') || ''
//   },
//   getters: {},
//   mutations: {},
//   actions: {}
// }

// export default userModule

import { Login } from '@/api/login'

const state = () => {
  return {
    token: localStorage.getItem('token') || ''
  }
}

const getters = {
  token: (state) => state.token
}

const mutations = {
  SET_TOKEN(state, value) {
    state.token = value
  }
}

const actions = {
  login({ commit }, data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      Login(data)
        .then((res) => {
          console.log(res)
          const { token } = res.data.result
          commit('SET_TOKEN', token)
          localStorage.setItem('token', token)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
