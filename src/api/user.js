import requset from '@/utils/request'
export const getUserDetaolByid = (id) => {
  return requset({
    url: `sys/user/${id}`
  })
}

export function getInfo() {
  return requset({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {

}
