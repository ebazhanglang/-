/* eslint-disable */
export const errorImg = {
  inserted(el, binding, vnode) {
    el.errorImg = function () {
      el.src = binding.value
    }
  }
}
