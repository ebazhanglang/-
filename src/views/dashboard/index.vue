<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <UploadExcel :on-success="handleSuccess" :before-upload="handleUpload" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    // handleSuccess(e) {
    //   console.log(e)
    // },
    // handleUpload(e) {
    //   if (e.size > 10240) {
    //     this.$message.error('to Big')
    //     return false
    //   }
    //   return true
    // }
  }
}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
