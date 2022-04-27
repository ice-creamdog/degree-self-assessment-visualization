// import { InjectionKey } from 'vue'
import { createStore } from 'vuex'
import user from '@/store/modules/user'
import projectEdit from '@/store/modules/projectEdit'
import echartsOptions from '@/store/modules/echartsOptions'
// import { RootState, AllStateTypes } from './types'

export default createStore({
  namespaced: true,
  modules: {
    user,
    projectEdit,
    echartsOptions
  }
})

// export const key: InjectionKey<Store<RootState>> = Symbol('vue-store')
// export function useStore<T = AllStateTypes>() {
//   return baseUseStore<T>(key)
// }
