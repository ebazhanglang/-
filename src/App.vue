<template>
  <div id="app">
    <p v-color>6666</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  directives: {
    color: {
      inserted(el, binding) {
        console.log(el, binding)
      }
    }
  }
}
</script>
