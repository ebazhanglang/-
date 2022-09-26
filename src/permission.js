import router from '@/router'
import store from './store'

const whiteList = ['/login', '/404']
/* eslint-disable */
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (!store.getters.info) {
      await store.dispatch('user/getUserInfo')
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
