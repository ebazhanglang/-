<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
<<<<<<< HEAD
    <svg-icon iconClass='nested'></svg-icon>
=======
    <!-- <UploadExcel :on-success="handleSuccess" :before-upload="handleUpload" /> -->
>>>>>>> feature/employees
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
<<<<<<< HEAD
=======
  },
  methods: {
>>>>>>> feature/employees
  }
}
</script>

<<<<<<< HEAD
=======
<style lang="scss">

</style>

>>>>>>> feature/employees
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
<<<<<<< HEAD
=======

>>>>>>> feature/employees
</style>
