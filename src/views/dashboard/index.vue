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
