/* eslint-disable */
import { loginAPI } from '@/api/login'
import { getInfo, getUserDetaolByid } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: {}
  },
  mutations: {
    GET_TOKEN(state, payload) {
      state.token = payload
    },
    GET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    REMOVE_USER_INFO(state) {
      state.userInfo = {}
    }
  },
  actions: {
    async getLogin({ commit }, loginData) {
      const data = await loginAPI(loginData)
      commit('GET_TOKEN', data)
    },
    async getUserInfo({ commit },) {
      const res = await getInfo()
      const res1 = await getUserDetaolByid(res.userId)
      // console.log(res, res1);
      const result = { ...res, ...res1 }
      commit('GET_USER_INFO', result)
      return JSON.parse(JSON.stringify(result))
    }
  }
}
