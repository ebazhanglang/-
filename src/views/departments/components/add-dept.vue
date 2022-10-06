<template>
  <!-- 新增部门的弹层 -->
  <el-dialog title="新增部门" :visible="showDialog" @close="handleClose">
    <!-- 表单组件  el-form   label-width设置label的宽度   -->
    <!-- 匿名插槽 -->
    <el-form ref="dadDeptForm" label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" style="width:80%" placeholder="请选择" @focus="getEmployeeSimple">
          <el-option v-for="item in peoples" :key="item.id" :label="item.username" :value="item.username" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <!-- el-dialog有专门放置底部操作栏的 插槽  具名插槽 -->
    <el-row slot="footer" type="flex" justify="center">
      <!-- 列被分为24 -->
      <el-col :span="6">
        <el-button v-loading="loading" type="primary" size="small" @click="submit">确定</el-button>
        <el-button size="small" @click="handleClose">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments, addDepartmentsAPI } from '@/api/departments'
import { getEmployeeSimpleAPI } from '@/api/EmployeeSimple'
export default {
  name: 'AddDept',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    currentNode: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const checkCodeRepeat = async(rule, value, cb) => {
      const { depts } = await getDepartments()
      const isRepeat = depts.some(ele => ele.code === value)
      console.log(rule, value, cb)
      isRepeat ? cb(new Error(`模块下已存在${value}编码`)) : cb()
    }
    const nameCheck = async(rule, value, cb) => {
      const { depts } = await getDepartments()
      const deptStj = depts.filter(item => item.id === this.currentNode.id)
      const isDeptStj = deptStj.some(item => item === value)
      isDeptStj ? cb(new Error(`模块下已存在${value}编码`)) : cb()
    }
    return {
      formData: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
      },
      rules: {
        name: [
          { required: true, trigger: 'blur', message: '部门名称必填' },
          { min: 1, max: 50, message: '部门名称1-50个字符', trigger: 'blur' },
          {
            trigger: 'blur',
            validator: nameCheck
          }
        ],
        code: [
          { required: true, message: '部门编码必填', trigger: 'blur' },
          { min: 1, max: 50, message: '部门编码1-50个字符', trigger: 'blur' },
          {
            trigger: 'blur',
            validator: checkCodeRepeat
          }
        ],
        manager: [
          { required: true, message: '部门负责人必填' }
        ],
        introduce: [
          { required: true, message: '部门介绍必填', trigger: 'blur' },
          { min: 1, max: 300, message: '部门介绍1-300个字符', trigger: 'blur' }
        ]
      },
      peoples: [],
      loading: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:showDialog', false)
      this.$refs.dadDeptForm.resetFields()
    },
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimpleAPI()
    },
    async submit() {
      try {
        this.$refs.dadDeptForm.validate()
        this.loading = true
        await addDepartmentsAPI({ ...this.formData, pid: this.currentNode })
        this.$message.success('新增部门')
        this.$parent.getDepartments()
        this.handleClose()
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
