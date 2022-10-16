<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <el-row style="height: 60px;">
            <el-button
              icon="el-icon-plus"
              size="small"
              style="margin-left:10px;"
              type="primary"
              @click="isShow = true"
            >新增角色</el-button>
          </el-row>
          <el-table
            border
            style="width: 100%"
            :data="roleList"
          >
            <el-table-column
              type="index"
              label="序号"
              width="120"
            />
            <el-table-column
              prop="name"
              label="角色名称"
              width="240"
            />
            <el-table-column
              prop="description"
              label="描述"
            />
            <el-table-column
              label="操作"
            >
              <template slot-scope="{row}">
                <el-button size="small" type="success">分配权限</el-button>
                <el-button size="small" type="primary" @click="editRole(row)">编辑</el-button>
                <el-button size="small" type="danger" @click="deleteRole(row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row type="flex" justify="end" align="middle" style="height: 60px">
            <el-pagination
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
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <el-alert
            title="消息提示的文案"
            type="info"
            show-icon
            :closable="false"
          />
          <el-form label-width="120px" style="margin-top:50px" :model="companyInfo">
            <el-form-item label="公司名称">
              <el-input v-model="companyInfo.name" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="companyInfo.companyAddress" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="companyInfo.companyPhone" disabled style="width:400px" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="companyInfo.remarks" type="textarea" :rows="3" disabled style="width:400px" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <addRole ref="addRole" :getrolelist="getRoleList" :isshow.sync="isShow" />
  </div>
</template>

<script>

import { getRoleListAPI, deleteRole, getCompanyInfoAPI } from '@/api/setting'
import { mapGetters } from 'vuex'
import addRole from './component/addRole.vue'
export default {
  name: 'Setting',
  components: {
    addRole
  },
  data() {
    return {
      activeName: 'first',
      page: {
        page: 1,
        pagesize: 10
      },
      total: 0,
      roleList: [],
      isShow: false,
      companyInfo: {}
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
      const { total, rows } = await getRoleListAPI(this.page)
      this.total = total
      this.roleList = rows
      if (total > 0 && rows.length === 0) {
        this.page.page--
        this.getRoleList()
      }
    },
    editRole(row) {
      this.$refs.addRole.roleFrom = { ...row }
      this.isShow = true
      this.getRoleList()
    },
    async deleteRole(id) {
      try {
        await this.$confirm('确认删除角色吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteRole(id)
        this.getRoleList()
      } catch (error) {
        console.log('cancel')
      }
    },
    async getCompanyInfo() {
      this.companyInfo = await getCompanyInfoAPI(this.companyId)
    }
  }
}
</script>

<style>

</style>
