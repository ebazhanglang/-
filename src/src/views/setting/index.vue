<template>
  <div class="app-container">
    <el-card shadow="always">
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first">
          <el-row>
            <!-- 按钮 -->
            <el-col :span="24">
              <el-button type="primary" style="margin-left:10px" size="small" @click="handleAdd"> <i class="el-icon-plus" /> 新增角色</el-button>
            </el-col>
            <!-- 表格 -->
            <el-table v-loading="loading" :data="roleList">
              <el-table-column
                label="序号"
                width="120"
                type="index"
              />
              <el-table-column
                label="角色名称"
                width="240"
                prop="name"
              />
              <el-table-column
                label="描述"
                prop="description"
              />
              <el-table-column
                label="操作"
                width="240"
              >
                <template slot-scope="{ row }">
                  <el-button size="small" type="success">分配权限</el-button>
                  <el-button size="small" type="primary" @click="editRole(row)">编辑</el-button>
                  <el-button size="small" type="danger" @click="delRow(row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-row type="flex" justify="end" align="middle" style="height:60px">
              <el-pagination
                v-if="total>0"
                background
                layout="prev, pager, next,sizes"
                :total="total"
                :current-page.sync="page.page"
                :page-size.sync="page.pagesize"
                :page-sizes="[2,5,10,15]"
                @current-change="getRoleList"
                @size-change="getRoleList"
              />
            </el-row>

          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          />
          <el-form :model="companyInfo" label-width="120px" style="margin-top:50px">
            <el-form-item label="公司名称">
              <el-input v-model="companyInfo.name" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="companyInfo.companyAddress" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="companyInfo.mailbox" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="companyInfo.remarks" type="textarea" :rows="3" disabled style="width:400px" />
            </el-form-item>
          </el-form>
        </el-tab-pane>

      </el-tabs>
    </el-card>
    <roleDialog ref="addRole" :dialog-visible.sync="dialogVisible" @refreshList="getRoleList" />
  </div>
</template>

<script>
import { getRoleList, deleteRole, getCompanyInfo } from '@/api/setting'
import { mapGetters } from 'vuex'
import roleDialog from './components/roleDialog.vue'
export default {
  components: {
    roleDialog
  },
  data() {
    return {
      companyInfo: {},
      activeName: 'first',
      page: {
        page: 1,
        pagesize: 10
      },
      total: 0,
      roleList: [],
      loading: false,
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters(['companyId'])
  },
  mounted() {
    this.getRoleList()
    this.getCompanyInfo()
  },
  methods: {
    async getRoleList() {
      try {
        const { rows, total } = await getRoleList(this.page)
        this.total = total
        this.roleList = rows
        if (total > 0 && rows.length === 0) {
          this.page.page = this.page.page - 1
          this.getRoleList()
        }
      } catch (e) {
        console.log(e)
      }
    },
    handleAdd() {
      this.dialogVisible = true
    },
    editRole(row) {
      this.$refs.addRole.formData = { ...row }
      this.dialogVisible = true
    },
    async delRow(id) {
      try {
        await this.$confirm('确定删除该角色吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'danger'
        })
        await deleteRole(id)
        this.getRoleList()
      } catch (e) {
        console.log('cancel')
      }
    },
    async getCompanyInfo() {
      this.companyInfo = await getCompanyInfo(this.companyId)
    }
  }
}
</script>

<style>

</style>
