import axios from 'axios'
const devserve = axios.create({
  baseURL: '/dev',
  timeout: 5000
})
export default devserve
