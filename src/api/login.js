import request from '@/utils/request'

<<<<<<< HEAD
/**
 * 登录接口
 * @param {*} data
 * @returns
 */
export const loginAPI = (data) => {
=======
export const login = (data) => {
>>>>>>> feature/employees
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
