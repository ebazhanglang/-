import request from '@/utils/request'

/**
 *  获取员工的简单列表
 * **/
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 * 获取员工的综合列表数据
 * ***/
export function getEmployeeListAPI(params) {
  return request({
    url: '/sys/user',
    params
  })
}

/** **
 *  新增员工的接口
 * **/
export function addEmployeeAPI(data) {
  return request({
    method: 'post',
    url: '/sys/user',
    data
  })
}

/**
 * 删除员工接口
 * ****/

export function delEmployeeAPI(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

/** *
 *  封装一个导入员工的接口
 *
 * ***/

export function importEmployeeAPI(data) {
  return request({
    url: '/sys/user/batch',
    method: 'post',
    data
  })
}

/**
 * 获取员工个人信息
 * @param {*} id
 * @returns
 */
export function getEmployeeInfoAPI(id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

/**
 * 保存用户基本信息
 * @param {*} data
 * @returns
 */
export function saveEmployeesInfo(data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data
  })
}

/**
 * 获取员工岗位信息
 * @param {*} id
 * @returns
 */
export function getEmployeesJob(id) {
  return request({
    url: `/employees/${id}/jobs`
  })
}

/**
 * 保存员工岗位信息
 * @param {*} id
 * @returns
 */
export function saveEmployeesJob(data) {
  return request({
    url: `/employees/${data.userId}/jobs`,
    method: 'put',
    data
  })
}
