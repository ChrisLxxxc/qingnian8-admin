<template>
  <div class="homeView">
      <el-container>
        <el-header>
          <div class="logo" @click="goHome">
            <img src="@/assets/images/logo2.png" alt="">
            <div class="text">数据分析·管理系统</div>
          </div>

          <div class="upLogin">
            <el-popconfirm title="确定要退出登录吗？" @confirm="outLogin">
              <el-button type="danger"  slot="reference">退出登录</el-button>
            </el-popconfirm>
          </div>
        </el-header>
        <el-container class="homeContent">
          <el-aside :width="isCollapse ? '64px' :'150px'">

            <el-tooltip effect="dark" content="展开与折叠" placement="right">
              <div class="fold" @click="clickFold">
                <i class="el-icon-d-arrow-left" v-show="!isCollapse"></i>
                <i class="el-icon-d-arrow-right" v-show="isCollapse"></i>
              </div>
            </el-tooltip>

            <el-menu
               background-color="#304156"
               text-color="rgba(255,255,255,0.6)"
               active-text-color="#fff"
               :collapse="isCollapse"
               :collapse-transition="collapseFlash"
               router
               :default-active="$route.path"
            >
              <el-menu-item index="/all">
                <i class="el-icon-coin"></i>
                <span slot="title">意向客户</span>
              </el-menu-item>

              <el-menu-item index="/add">
                <i class="el-icon-user"></i>
                <span slot="title">添加客户</span>
              </el-menu-item>

              <el-menu-item index="/data">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">数据分析</span>
              </el-menu-item>

            </el-menu>

          </el-aside>
          <el-main>

            <router-view></router-view>

          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isCollapse: false,
      collapseFlash: false
    }
  },
  methods: {
    // 返回首页
    goHome () {
      this.$router.push('/welcome')
    },

    // 展开与折叠菜单
    clickFold () {
      this.isCollapse = !this.isCollapse
    },

    // 退出登录
    outLogin () {
      window.sessionStorage.removeItem('token')
      this.$message.success('退出成功')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.homeView{
  height: 100%;
}
.el-header{
  background: #17253F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    display: flex;
    align-items: center;
    height: 100%;
    img{
      display: block;
      height: 70%;
    }
    .text{
      font-size: 26px;
      color:rgba(255, 255, 255, .6);
      padding-left:20px;
    }
  }
}
.el-aside{
  background: #304156;
  position: relative;
  .el-menu{
    border-right:none;
  }
  .fold{
    background: #17253F;
    position: absolute;
    color:#ccc;
    width:30px;
    text-align: center;
    line-height: 60px;
    font-size:26px;
    right:0;
    top:calc(50% - 30px);
  }
}
.el-container{
  background: #F8F8F8;
  height: 100%;
}
.homeContent{
  height: calc(100% - 60px);
}

</style>
