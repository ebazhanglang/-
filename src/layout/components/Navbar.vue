<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
<<<<<<< HEAD

    <breadcrumb class="breadcrumb-container" />
=======
    <div class="app-breadcrumb">
      江苏传智播客教育科技股份有限公司
      <span class="breadBtn">体验版</span>
    </div>
    <!-- <breadcrumb class="breadcrumb-container" /> -->
>>>>>>> feature/employees

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
<<<<<<< HEAD
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
=======
          <img
            v-imgerror="defaultImg"
            :src="staffPhoto"
            class="user-avatar"
          >
          <span>{{ name }}</span>
>>>>>>> feature/employees
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
<<<<<<< HEAD
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
=======
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
>>>>>>> feature/employees
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
<<<<<<< HEAD
import Breadcrumb from '@/components/Breadcrumb'
=======
// import Breadcrumb from '@/components/Breadcrumb'
>>>>>>> feature/employees
import Hamburger from '@/components/Hamburger'

export default {
  components: {
<<<<<<< HEAD
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
=======
    // Breadcrumb,
    Hamburger
  },
  data() {
    return {
      defaultImg: 'https://img2.baidu.com/it/u=4064025444,3686295405&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664211600&t=4de78ca17229f98c061a1b6903b64104'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name',
      'staffPhoto'
>>>>>>> feature/employees
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
<<<<<<< HEAD
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
=======
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
>>>>>>> feature/employees
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
<<<<<<< HEAD

  .hamburger-container {
=======
  background-image: -webkit-linear-gradient(left, #3d6df8, #5b8cff);
  .hamburger-container {
    color: #ffffff;
    fill: currentColor;
>>>>>>> feature/employees
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
<<<<<<< HEAD

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
=======
      .avatar-wrapper {
        position: relative;
        // 开启flex
        display: flex;
        align-items: center;
        color: #fff;
>>>>>>> feature/employees

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
<<<<<<< HEAD
        }

=======
          margin-right: 8px;
          border-radius: 50%;
        }
>>>>>>> feature/employees
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
<<<<<<< HEAD
          top: 25px;
=======
          top: 18px;
>>>>>>> feature/employees
          font-size: 12px;
        }
      }
    }
  }
}
<<<<<<< HEAD
=======
.app-breadcrumb {
  display: inline-block;
  font-size: 18px;
  line-height: 50px;
  margin-left: 10px;
  color: #ffffff;
  cursor: text;
  .breadBtn {
    background: #84a9fe;
    font-size: 14px;
    padding: 0 10px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    margin-left: 15px;
  }
}
>>>>>>> feature/employees
</style>
