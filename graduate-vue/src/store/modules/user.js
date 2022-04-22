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

import { Login, Logout } from '@/api/login'

const state = () => {
  return {
    token: localStorage.getItem('token') || '',
    userId: localStorage.getItem('userId') || ''
  }
}

const getters = {
  token: (state) => state.token,
  userId: (state) => state.userId
}

const mutations = {
  SET_TOKEN(state, value) {
    state.token = value
  },
  SET_USERID(state, value) {
    state.userId = value
  }
}

const actions = {
  login({ commit }, data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      Login(data)
        .then((res) => {
          console.log(res)
          const { token, id } = res.data.result
          commit('SET_TOKEN', token)
          commit('SET_USERID', id)
          localStorage.setItem('token', token)
          localStorage.setItem('userId', id)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  logout({ commit }, data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      Logout(data)
        .then((res) => {
          commit('SET_TOKEN', '')
          commit('SET_USERID', '')
          localStorage.setItem('token', '')
          localStorage.setItem('userId', '')
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
