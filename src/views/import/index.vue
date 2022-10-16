<template>
  <div>
    <UploadExcel :on-success="handleSuccess" />
  </div>
</template>

<script>
import { importEmployeeAPI } from '@/api/EmployeeSimple'
export default {
  methods: {
    async handleSuccess({ header, results }) {
      const arr = []
      results.forEach(item => {
        console.log(item)
        const userRelations = {
          '入职日期': 'timeOfEntry',
          '手机号': 'mobile',
          '姓名': 'username',
          '转正日期': 'correctionTime',
          '工号': 'workNumber'
        }
        const userinfo = {}
        Object.keys(item).forEach(keys => {
          userinfo[userRelations[keys]] = item[keys]
        })
        arr.push(userinfo)
      })
      await importEmployeeAPI(arr)
      this.$message.success('导入成功')
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
