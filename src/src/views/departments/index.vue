<template>
  <div class="departments-container">
    <el-card>
      <treetools :tree-node="company" :is-root="false" />
    </el-card>
    <el-tree :data="departs" :default-expand-all="true" :props="defaultProps">
      <treetools slot-scope="{data}" :tree-node="data" />
    </el-tree>
  </div>
</template>

<script>
import { getDepartments } from '@/api/departments'
import treetools from './components/tree-tools.vue'
export default {
  components: {
    treetools
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }],
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' }
    }
  },
  mounted() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      await getDepartments()
    }
  }
}
</script>

<style lang='scss'>
.departments-container {
  width: 900px;
  margin: 20px auto;
  .el-tree {
    .el-card__body {
      padding-right: 0px !important;
    }
  }
}
</style>
