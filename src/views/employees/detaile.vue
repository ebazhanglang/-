<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="tabClick">
          <el-tab-pane lazy label="用户管理" name="first">

            <el-form ref="form" label-width="80px" :model="accountInfo" :rules="rules">
              <el-form-item label="姓名" prop="username">
                <el-input v-model="accountInfo.username" />
              </el-form-item>

              <el-form-item label="密码" prop="password">
                <el-input v-model="accountInfo.password" type="password" />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="updateInfo">更新信息</el-button>
              </el-form-item>
            </el-form>

          </el-tab-pane>
          <el-tab-pane lazy label="配置管理" name="second">
            <UserInfo />
          </el-tab-pane>
          <el-tab-pane lazy label="角色管理" name="third">
            <JobInfo />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getUserDetailById, saveUserDetailById } from '@/api/user'
import UserInfo from './components/user-info.vue'
import JobInfo from './components/job-info.vue'
import Cookies from 'js-cookie'
export default {
  components: { UserInfo, JobInfo },
  data() {
    return {
      activeName: Cookies.get('activeName') || 'first',
      accountInfo: {},
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入账户名' },
          { min: 2, max: 10, trigger: 'blur', message: '请输入2-10之间的字符' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' },
          { min: 6, trigger: 'blur', message: '请输入最短6位字符' }
        ]
      }
    }
  },
  created() {
    this.getUserDetailById()
  },
  methods: {
    async getUserDetailById() {
      const res = await getUserDetailById(this.$route.params.id)
      this.accountInfo = res
    },
    async updateInfo() {
      try {
        await this.$refs.form.validate()
        await saveUserDetailById(this.accountInfo)
        this.$message.success('更新成功')
      } catch (error) {
        this.$message.error(error)
      }
    },
    tabClick() {
      Cookies.set('activeName', this.activeName)
    }
  }
}
</script>

<style>

</style>
