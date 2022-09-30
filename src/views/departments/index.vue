<template>
  <div class="departments-container">
    <el-card>
      <tree-tools :tree-node="company" :is-root="false" @addDepts="handle" />
    </el-card>
    <el-tree :data="departs" :props="defaultProps">
      <tree-tools slot-scope="{data}" :tree-node="data" @addDepts="handle" />
    </el-tree>
    <add-dept :show-dialog.sync="showDialog" :current-node="currentNode" />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils'
import AddDept from './components/add-dept' // 引入新增部门组件
export default {
  components: {
    TreeTools,
    AddDept
  },

  data() {
    return {
      company: { },
      departs: [],
      defaultProps: {
        label: 'name'
      },
      showDialog: false,
      currentNode: {}
    }
  },
  created() {
    this.getDepartments() // 调用自身的方法
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: result.companyManage, id: '' }
      // 需要将其转化成树形结构
      this.departs = tranListToTreeData(result.depts, '')
    },
    handle(node) {
      this.showDialog = true
      this.currentNode = node
    }
  }
}
</script>

<style lang="scss">
  .departments-container {
    width: 900px;
    margin: 20px auto;
    .el-tree {
      .el-tree-node__content {
        padding-right: 20px;
      }
    }
  }
</style>
