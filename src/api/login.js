import request from '@/utils/request'

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
export const loginAPI = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
