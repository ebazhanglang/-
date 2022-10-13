<template>
  <div class="app-container">
    <pageTools type="info" :show-before="true">
      <template #before>
        <span>共166条记录</span>
      </template>
      <template #after>
        <el-button size="small" type="warning" @click="$router.push('/import')">导入</el-button>
        <el-button size="small" type="danger" @click="exportExcel">导出</el-button>
        <el-button size="small" type="primary" @click="handleEmployees">新增员工</el-button>
      </template>
    </pageTools>
    <!-- 放置表格和分页 -->
    <el-card>
      <el-table v-loading="loading" border :data="list">
        <el-table-column label="序号" sortable="" width="80" type="index" />
        <el-table-column label="姓名" prop="username" />
        <el-table-column label="工号" prop="workNumber" />
        <el-table-column label="聘用形式" prop="formOfEmployment" :formatter="formatEmployment" />
        <el-table-column label="部门" prop="departmentName" />
        <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
          <template slot-scope="{row}">
            {{ row.timeOfEntry|formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="账户状态" prop="enableState">
          <template slot-scope="{row}">
            <el-switch :value="row.enableState === 1" />
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="280">
          <template slot-scope="{row}">
            <el-button type="text" size="small" @click="goDetaile(row)">查看</el-button>
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-row type="flex" justify="end" align="middle" style="height: 60px">
        <el-pagination
          layout="prev, pager, next, sizes, total"
          :current-page.sync="page.page"
          :page-size.sync="page.size"
          :page-sizes="[5,10,15,20]"
          :total="total"
          @current-change="getEmployeeList"
          @size-change="getEmployeeList"
        />
      </el-row>
    </el-card>
    <add-employess :is-show-dialog.sync="isShowDialog" />
  </div>
</template>

<script>
import { getEmployeeListAPI, delEmployeeAPI } from '@/api/EmployeeSimple'
import employees from '@/api/constant/employees'
import addEmployess from './components/addEmpoloyess.vue'
export default {
  name: 'Employees',
  components: {
    addEmployess
  },
  data() {
    return {
      page: {
        page: 1,
        size: 10
      },
      list: [],
      total: 0,
      loading: false,
      hireType: employees.hireType,
      isShowDialog: false
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    async getEmployeeList() {
      try {
        const { rows, total } = await getEmployeeListAPI(this.page)
        this.loading = true
        this.list = rows
        this.total = total
      } finally {
        this.loading = false
      }
    },
    formatEmployment(row, column, cellValue, index) {
      const res = this.hireType.find(ele => ele.id === cellValue)
      return res && res.value || '非正式'
    },
    handleEmployees() {
      this.isShowDialog = true
    },
    async del(id) {
      try {
        this.$confirm('确定删除该员工吗', '提示', {
          type: 'warning'
        })
        await delEmployeeAPI(id)
        this.getEmployeeList()
      } catch (error) {
        console.log(error)
      }
    },
    async exportExcel() {
      const { export_json_to_excel } = await import('@/vendor/Export2Excel')
      const { rows } = await getEmployeeListAPI({
        page: 1,
        size: this.total
      })
      const exportExcelMapPath = {
        '手机号': 'mobile',
        '姓名': 'username',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      const header = Object.keys(exportExcelMapPath)
      const data = rows.map(item => {
        return header.map(h => {
          if (h === '聘用形式') {
            const hType = this.hireType.find(hire => {
              return hire.id === item[exportExcelMapPath[h]]
            })
            return hType ? hType.value : '未知'
          }
          return item[exportExcelMapPath[h]]
        })
      })
      export_json_to_excel({
        header, // 表头 必填
        data, // 具体数据 必填
        filename: 'excel-list', // 非必填
        autoWidth: true, // 非必填
        bookType: 'xlsx' // 非必填
      })
    },
    goDetaile(row) {
      this.$router.push('/employees/detaile/' + row.id)
    }
  }
}
</script>

<style>

</style>
