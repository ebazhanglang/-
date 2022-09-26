import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const devserve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

devserve.interceptors.request.use(config => {
  if (store.getters.token) {
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
  Message.error(error.message)
  return Promise.reject(error)
})
export default devserve
