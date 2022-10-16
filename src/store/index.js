import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
<<<<<<< HEAD
=======

>>>>>>> feature/employees
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [createPersistedState({
<<<<<<< HEAD
    paths: ['user.token']
=======
    // paths: ['user.token']
    reducer({ user }) {
      return {
        user: {
          token: user.token,
          harssTime: user.harssTime
        }
      }
    }
>>>>>>> feature/employees
  })]
})

export default store
