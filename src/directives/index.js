/* eslint-disable */
export const errorImg = {
  inserted(el, binding, vnode) {
    el.onerror = function () {
      el.src = binding.value
    }
  }
}
