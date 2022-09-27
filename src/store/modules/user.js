import { login } from '@/api/login'
import { getUserInfo, getUserDetailById } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: {},
    harssTime: 0
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    REMOVE_TOKEN(state) {
      state.token = null
    },
    REMOVE_USER_INFO(state) {
      state.userInfo = {}
    },
    SET_HARSS_TIME(state, harssTime) {
      state.harssTime = harssTime
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      const data = await login(loginData)
      commit('SET_TOKEN', data)
      commit('SET_HARSS_TIME', Date.now())
    },
    async getUserInfo({ commit }) {
      const data = await getUserInfo()
      const res1 = await getUserDetailById(data.userId)
      const result = { ...data, ...res1 }
      commit('SET_USER_INFO', result)
      return JSON.parse(JSON.stringify(result))
    },
    logout({ commit }) {
      commit('REMOVE_TOKEN')
      commit('REMOVE_USER_INFO')
    }
  }
}
