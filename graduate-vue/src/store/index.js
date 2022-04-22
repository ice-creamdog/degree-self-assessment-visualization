// import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import user from '@/store/modules/user'
// import { RootState, AllStateTypes } from './types'

export default createStore({
  namespaced: true,
  modules: {
    user
  }
})

// export const key: InjectionKey<Store<RootState>> = Symbol('vue-store')
// export function useStore<T = AllStateTypes>() {
//   return baseUseStore<T>(key)
// }
