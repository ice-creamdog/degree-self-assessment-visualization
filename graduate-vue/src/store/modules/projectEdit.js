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

import {
  GetProjectList,
  AddProject,
  DeleteProject,
  UpdateProject,
  ShowProject
} from '@/api/projectsEdit'

const state = () => {
  return {}
}

const getters = {}

const mutations = {}

const actions = {
  getProjectList() {
    return new Promise((resolve, reject) => {
      GetProjectList()
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  addProject(data) {
    return new Promise((resolve, reject) => {
      AddProject(data)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  showProject() {
    return new Promise((resolve, reject) => {
      ShowProject()
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deleteProject() {
    return new Promise((resolve, reject) => {
      DeleteProject()
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updateProject() {
    return new Promise((resolve, reject) => {
      UpdateProject()
        .then((res) => {
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
