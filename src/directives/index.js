export const imgerror = {
  /* eslint-disable */
  inserted(el, binding, vnode) {
    el.onerror = function () {
      el.src = binding.value
    }
  }
}
