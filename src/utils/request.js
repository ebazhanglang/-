import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
const Timeout = 3600
const isCheckTimeout = () => (Date.now() - store.getters.harssTime) / 1000 > Timeout
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  itmeout: 5000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (isCheckTimeout()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token 超时'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
},
error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { data, message, success } = response.data
  if (success) {
    return data
  }
  Message.error(message)
  // throw (new Error(message))
  return Promise.reject(new Error(message))
}, error => {
  console.dir(error)
  if (error.response?.status === 401) {
    store.dispatch('user/logout')
    router.push('/login')
    Message.error('身份认证失效')
  } else {
    Message.error(error.message)
  }
  return Promise.reject(error.message)
})

export default service
