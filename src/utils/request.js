import axios from 'axios'
import { Message } from 'element-ui'
<<<<<<< HEAD
const devserve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
devserve.interceptors.response.use(response => {
  const { message, data, success } = response.data
=======
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
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { data, message, success } = response.data
>>>>>>> feature/employees
  if (success) {
    return data
  }
  Message.error(message)
<<<<<<< HEAD
  return Promise.reject(new Error(message))
}, error => {
  Message.error(error.message)
  return Promise.reject(error)
})
export default devserve
=======
  // throw (new Error(message))
  return Promise.reject(new Error(message))
}, error => {
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
>>>>>>> feature/employees
