import { createStore } from 'vuex'

const state = {
  requsting: false,
  error: {}
}

const getters = {
  requesting: (state) => state.requesting,
  error: (state) => state.error
}

export default createStore({
  state,
  getters,
  modules: {}
})
