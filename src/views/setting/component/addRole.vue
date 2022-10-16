<template>
  <div>
    <el-dialog
      :title="title"
      width="60%"
      :visible="isshow"
      :before-close="cencel"
    >
      <el-form
        ref="roleDialogForm"
        label-width="80px"
        :model="roleFrom"
        :rules="rules"
      >
        <el-form-item
          prop="name"
          label="角色"
        >
          <el-input v-model="roleFrom.name" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="roleFrom.description" type="textarea" row="3" />
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center" align="middle" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button v-loading="loading" @click="addRole">确 定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { addRoleAPI, updateRole } from '@/api/setting'
export default {
  props: {
    isshow: {
      type: Boolean,
      default: false
    },
    /* eslint-disable */
    getrolelist: {
      type: Function,
    }
  },
  data() {
    return {
      roleFrom: {
        name: '',
        description: ' '
      },
      loading: false,
      rules: {
        name: [
          {
            required: true,
            mesaage: '角色不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    title() {
      return this.roleFrom.id ? '编辑角色' : '新增角色'
    }
  },
  methods: {
    cencel() {
      this.$emit('update:isshow', false)
      this.$refs.roleDialogForm.resetFields()
      // this.$refs.roleFrom.resetFields()
      this.roleFrom = {
        name: '',
        description: ' '
      }
    },
    async addRole() {
      try {
        await this.$refs.roleDialogForm.validate()
        this.loading = true
        this.roleFrom.id ? await updateRole(this.roleFrom) : await addRoleAPI(this.roleFrom)
        this.$message.success(this.roleFrom.id ? '编辑成功' : '角色新增成功')
        this.$emit('getrolelist')
        this.$emit('update:isshow', false)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }

}
</script>

<style>

</style>
