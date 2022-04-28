// import { Module } from 'vuex'
// import { RootState } from '@/store/types'
// import { UserModuleTypes } from '@/store/modules/user/types'

import { values } from 'lodash'

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

const state = () => {
  return {
    options: {
      // tooltip: {
      // xAxis: {
      //   type: 'category',
      //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // },
      // yAxis: {
      //   type: 'value'
      // },
      series: [
        // {
        //   data: [150, 230, 224, 218, 135, 147, 260],
        //   type: 'line'
        // }
      ]
      //   trigger: 'item'
      // },
      // series: [
      //   {
      //     data: [150, 230, 224, 218, 135, 147, 260],
      //     type: 'line'
      //   },
      //   {
      //     name: 'Access From',
      //     type: 'pie',
      //     radius: ['40%', '70%'],
      //     avoidLabelOverlap: false,
      //     itemStyle: {
      //       borderRadius: 10,
      //       borderColor: '#fff',
      //       borderWidth: 2
      //     },
      //     label: {
      //       show: true,
      //       position: ''
      //     },
      //     labelLine: {
      //       show: true
      //     },
      //     emphasis: {
      //       label: {
      //         show: true,
      //         fontSize: '40',
      //         fontWeight: 'bold'
      //       }
      //     },
      //     data: [
      //       { value: 1048, name: 'Search Engine' },
      //       { value: 735, name: 'Direct' },
      //       { value: 580, name: 'Email' },
      //       { value: 484, name: 'Union Ads' },
      //       { value: 300, name: 'Video Ads' }
      //     ]
      //   }
      // ]
    }
    // options: localStorage.getItem('currentOptions') || {}
  }
}

const getters = {
  getOptions(state) {
    return state.options
  }
}

const mutations = {
  // 删除某个属性
  deleteProp(state, propName = '') {
    if (propName) delete state.options[propName]
  },

  setOptions(state, data) {
    const { key, ...values } = data
    const { newValue } = values
    state.options[key] = newValue
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
