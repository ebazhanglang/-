<template>
  <div class="login-container">
<<<<<<< HEAD
    <el-form
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :model="loginForm"
      :rules="rules"
    >
=======
    <el-form ref="loginForm" class="login-form" :model="formDate" :rules="rules">

>>>>>>> feature/employees
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/login-logo.png" alt="">
        </h3>
      </div>
<<<<<<< HEAD

      <el-form-item prop="mobile">
        <span class="svg-container el-icon-user-solid" />
        <el-input ref="pwd" v-model="loginForm.mobile" type="text" />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container el-icon-user-solid" /> -->
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="pwd" v-model="loginForm.password" :type="passwordType" />
        <span class="svg-container" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
        <!-- <span class="svg-container el-icon-user-solid" /> -->
      </el-form-item>

      <el-button class="loginBtn" :loading="loading" @click="login">登录</el-button>
=======
      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="formDate.mobile" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="pwdRef" v-model="formDate.password" :type="passwordType==='password'?'password':'text'" placeholder="请输入密码" />
        <span class="svg-container" @click="showPwd">
          <svg-icon :icon-class="passwordType==='password'?'eye':'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" class="loginBtn" @click="login">登录</el-button>
>>>>>>> feature/employees
      <div class="tips">
        <span style="margin-right:20px;">账号: 13800000002</span>
        <span> 密码: 123456</span>
      </div>

    </el-form>
  </div>
<<<<<<< HEAD
  <!-- 环境变量的作用
  1. 正常公司中 有几个环境 4 开发 dev 测试 test 预发 uat 线上 pro
  2. 在项目里如何配置这几个环境  通过 .env 配置 base api
  开发环境的接口前缀 /api
  线上环境的接口前缀 /prod-api
   -->
</template>
=======
</template>

>>>>>>> feature/employees
<script>
import { validPhone } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
<<<<<<< HEAD
    return {
      loading: false,
      passwordType: 'password',
      loginForm: {
=======
    const phoneValid = (rule, value, callback) => {
      if (validPhone(value)) {
        callback()
      } else {
        callback(new Error('格式错误'))
      }
    }
    return {
      passwordType: 'password',
      formDate: {
>>>>>>> feature/employees
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
<<<<<<< HEAD
          { required: true, message: '请填写手机号', trigger: 'blur' },
          { validator: this.phoneValid, message: '格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码' },
          {	min: 6, max: 16, message: '密码的长度在6-16位之间 ', trigger: 'blur' }
        ]
      }
=======
          { required: true, message: '手机号码必填', trigger: 'blur' },
          { validator: phoneValid, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码必填', trigget: 'blur' },
          { min: 4, max: 6, message: '密码格式不正确', trigger: 'blur' }
        ]
      },
      loading: false
>>>>>>> feature/employees
    }
  },
  methods: {
    showPwd() {
<<<<<<< HEAD
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    phoneValid(rule, value, callback) {
      if (!validPhone(value)) {
        callback(new Error('格式错误'))
      } else {
        callback()
      }
    },
=======
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      this.$nextTick(() => {
        this.$refs.pwdRef.focus()
      })
    },
>>>>>>> feature/employees
    async login() {
      try {
        await this.$refs.loginForm.validate()
        this.loading = true
<<<<<<< HEAD
        await this.$store.dispatch('user/getLogin', this.loginForm)
=======
        await this.$store.dispatch('user/loginAction', this.formDate)
>>>>>>> feature/employees
        this.$router.push('/')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

<<<<<<< HEAD
$bg:#283443;
$light_gray:#68b0fe;
=======
$bg:#d3e4ff;
$light_gray:#68b0fe;;
>>>>>>> feature/employees
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background-image: url('~@/assets/common/login.jpg'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
<<<<<<< HEAD
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
=======
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
>>>>>>> feature/employees
  }
  .el-form-item__error {
    color: #fff
  }
<<<<<<< HEAD
  .loginBtn {
    background: #407ffe;
    height: 64px;
    line-height: 32px;
    font-size: 24px;
    border: none;
    margin-bottom: 30px;
    width: 100%;
    color: #fff;
  }

=======
>>>>>>> feature/employees
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
<<<<<<< HEAD
$light_gray:#68b0fe;
=======
$light_gray:#eee;
>>>>>>> feature/employees

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
<<<<<<< HEAD
=======
  .loginBtn {
    background: #407ffe;
    height: 64px;
    line-height: 32px;
    font-size: 24px;
    width: 100%;
    margin-bottom: 30px;
    border: none;
  }
>>>>>>> feature/employees
}
</style>
