<template>
  <div class="login_content">
    <div class="header">
      <span>后台管理界面</span>
    </div>
    <el-form label-position="left" :model="ruleForm" ref="ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="admin" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password placeholder="请输入密码" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input class="verification_code" placeholder="输入验证码" v-model="ruleForm.usaus"></el-input>
        <img class="verification_code_image" src="../assets/images/timg.jpg" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import apiList from "../plugins/api";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        usaus: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 0, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "密码不能小于3位大于16位数",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted(){
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
  },
  methods: {
    submitForm(fromName) {
      this.$refs[fromName].validate((vaild) => {
        if (vaild) {
          apiList
            .login("login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              usaus: this.ruleForm.usaus,
            })
            .then((res) => {
              sessionStorage.setItem("username", res.username);
              sessionStorage.setItem("token", res.token);
              this.$router.push('public/index');
            })
            .catch((res) => {
              alert(res.msg);
            });
        }
        return;
      });
    },
  },
};
</script>

<style lang="less">
html,
body {
  background-color: #f3f3f4;
}
.login_content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 400px;
  height: 500px;
  background: white;
  .header {
    text-align: center;
    padding: 20px 0px;
    background: #41b883;
    span {
      color: white;
      font-size: 22px;
    }
  }
  .el-form {
    margin: 0 20px;
    padding: 25px;
    .el-input {
      width: 100%;
    }
    .el-form-item {
      .el-form-item__content {
        line-height: 0;
      }
    }
    .verification_code {
      input.el-input__inner {
        border: none;
        border-radius: 0;
        background: none;
        border-bottom: 1px solid #dcdfe6;
        width: 200px;
      }
    }
    .verification_code_image {
      position: relative;
      top: -31px;
      left: 200px;
      right: 0;
      bottom: 0;
      width: 116px;
      height: 30px;
    }
    .el-button {
      margin-top: -50px;
      width: 100%;
    }
  }
}
</style>

