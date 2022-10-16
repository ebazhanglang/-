// import PageTools from './pageTools'
import * as filters from '@/filters'
// const components = [PageTools]

// 对象方式
// export default {
//   install(Vue) {
//     components.forEach(item => {
//       Vue.component(item.name, item)
//     })
//   }
// }

// 实现组件的自动注册
const fn = require.context('./', true, /\.vue$/)
// console.log(fn.keys()) 路径
// console.log(fn('./pageTools/index.vue')) 根据路径查找模块
const components = fn.keys().map(item => {
  return fn(item)
})

// 函数方式
export default (Vue) => {
  components.forEach(item => {
    Vue.component(item.default.name, item.default)
  })
  Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
  })
}

