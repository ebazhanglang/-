import request from '@/utils/request'

export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}
export const getUserDetaiById = (id) => request({
  url: `/sys/user/${id}`,
  method: 'GET'
})
