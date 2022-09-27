import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
const isTime = 3600 // 秒
const devserve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 判断登录的时间是否大于当前时间
function isLoginOut() {
  const timeStamp = (Date.now() - store.getters.hrsaastime) / 1000
  return timeStamp > isTime
}
devserve.interceptors.request.use(config => {
  if (store.getters.token) {
    // 如果大于就退出,并且清空token和账户信息
    if (isLoginOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token过期,请重新登录'))
    }
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

devserve.interceptors.response.use(response => {
  const { message, data, success } = response.data
  if (success) {
    return data
  }
  Message.error(message)
  return Promise.reject(new Error(message))
}, error => {
  if (error.response?.status === 401) {
    store.dispatch('user/logout')
    router.push('/login')
    Message.error('token过期,请重新登录')
  } else {
    Message.error(error.message)
  }
  return Promise.reject(error)
})
export default devserve
