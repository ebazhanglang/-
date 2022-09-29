export const imgerror = {
  inserted(el, binding, vnode) {
    el.onerror = function() {
      el.src = binding.value
    }
  }
}
