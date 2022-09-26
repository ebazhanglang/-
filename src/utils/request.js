import axios from 'axios'
import { Message } from 'element-ui'
const devserve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
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
