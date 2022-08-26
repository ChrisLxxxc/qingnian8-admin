<template>
  <div class="login">
      <div class="out">
        <div class="logo">
          <img src="@/assets/images/logo1.jpg" alt="">
        </div>

        <div class="inner">

          <el-form label-width="120px" :model="loginForm" :rules="loginRules" status-icon ref="loginForm">
              <el-form-item label="用户名：" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
              </el-form-item>

              <el-form-item label="密码：" prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" clearable></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">确认登录</el-button>
                <el-button @click="onReset">重置</el-button>
              </el-form-item>

          </el-form>

        </div>
      </div>
  </div>
</template>

<script>
import { loginAxios } from '@/network/networks'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 15, message: '用户名需要5-15位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '密码需要5-15位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    // 点击提交
    onSubmit () {
      this.$refs.loginForm.validate((valid) => {
        // 验证失败退出
        if (!valid) {
          this.$message.error('用户名和密码是必填的')
          return
        }

        // 按照要求填写了，再发送网络请求
        loginAxios(this.loginForm).then(res => {
          if (res.data.code == '401') {
            this.$message.error(res.data.txt)
          } else if (res.data.code == 200) {
            console.log(res)
            window.sessionStorage.setItem('token', res.data.token)
            this.$message.success('登录成功')
            this.$router.push('/home')
          }
        })
      })
    },

    // 重置表单
    onReset () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  background: #0D3F67;
  height: 100%;
  position: relative;
  .out{
    width:460px;
    height: 340px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    .logo{
      width:120px;
      height: 120px;
      border-radius:50%;
      overflow: hidden;
      position: absolute;
      left:calc(50% - 60px);
      top:-60px;
      box-shadow: 0 0 20px rgba(0,0,0,0.2);
      img{
        width:100%;
        height: 100%;
      }
    }
    .inner{
      min-height: 200px;
      padding-top:100px;
      padding-right:50px;
    }
  }
}

</style>
