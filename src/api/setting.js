import request from '@/utils/request'

/**
 * 获取角色列表
 * @param {*} params
 * @returns
 */
export const getRoleListAPI = (params) => {
  return request({
    url: '/sys/role',
    params
  })
}

/** *
 * 新增角色
 * ***/
export function addRoleAPI(data) {
  return request({
    url: '/sys/role',
    data,
    method: 'post'
  })
}

/**
 * 修改角色
 * ***/
export function updateRole(data) {
  return request({
    url: `/sys/role/${data.id}`,
    data,
    method: 'put'
  })
}

/** **
 *  删除角色
 *
 * ****/
export function deleteRole(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}

/**
 * 获取公司信息
 * **/
export function getCompanyInfoAPI(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}
