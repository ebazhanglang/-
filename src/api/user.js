import request from '@/utils/request'

export function login(data) {

}

export function getUserInfo() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}

/**
 * 获取员工基本信息
 * @param {*} id
 * @returns
 */
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

/**
 * 保存用户信息
 * @param {*} data
 * @returns promise
 */
export function saveUserDetailById(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'PUT',
    data
  })
}

export function logout() {

}
