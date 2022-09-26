/* eslint-disable */
import { loginAPI } from '@/api/login'
export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    GET_TOKEN(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async getLogin({ commit }, loginData) {
      const data = await loginAPI(loginData)
      commit('GET_TOKEN', data)
    }
  }
}
