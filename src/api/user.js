import request from '@/utils/request'

export function login(data) {

}

export function getUserInfo() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}

export const getUserDetailById = (id) => {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {

}
