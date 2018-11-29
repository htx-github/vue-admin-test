<template>
  <el-container class="loginbg">
    <div class="login-box">
      <el-row :gutter="20">
        <el-input placeholder="请输入用户名"
                  v-model="loginForm.username"
                  name="username"
                  type="text"
                  auto-complete="on"
        />
      </el-row>
      <el-row :gutter="20">
        <el-input type="password" placeholder="密码"
                  v-model="loginForm.password"
                  name="password"
                  auto-complete="on"
                  @keyup.enter.native="handleLogin"
        />
      </el-row>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-input placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <!--<div>-->
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            width="100%"
            height="40px"
          >
          <!--</div>-->
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="primary" style="width: 100%" @click="handleLogin">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      handleLogin: function () {

      }
    }
  }
</script>

<style scoped>
  .loginbg {
    background: linear-gradient(0deg, #0b4182 1%, #1e88e5 100%);
    width: 100%;
    height: 100%;
  }

  .login-box {
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px;
    background: #fff;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

</style>
