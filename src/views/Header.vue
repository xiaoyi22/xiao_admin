<template>
  <div class="header_content">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入您要查找的内容..."  v-model="search" class="header_search">
            <i slot="suffix" class="el-icon-search"></i>
          </el-input>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-right">
          <div class="user_right">
            <img :src="user.url" />
            <el-tag>Super</el-tag>
            <el-dropdown>
              <span>
                {{user.username}}
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="drop_down_options">
                  <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item>注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "xiaoyi",
        url: "/img/user_img.c53f96aa.jpg",
      },
      search:''
    };
  },
};
</script>

<style lang="less">
.header_content {
  border-top: 1px solid #e7eaec;
  border-bottom: 1px solid #e7eaec;
  background-color:#ffffff;
  .bg-purple-right {
    line-height: 56px;
    .user_right {
      line-height: 56px;
      text-align: right;
      margin-right: 30px;
      img {
        position: fixed;
        top: 6px;
        right: 80px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
      .el-tag {
        margin-right: 20px;
        color: red;
        font-size: 14px;
        font-weight: 400;
        font: 100;
        background: none;
        border: 1px solid red;
      }
      span {
        margin-right: 120px;
        font-size: 16px;
      }
    }
  }
}
.bg-purple-dark {
  line-height: 56px;
  margin-left: 80px;
  font-size: 22px;
}
.grid-content {
  border-radius: 0px;
  min-height: 56px;
}
.header_search {
  input {
    border: none !important;
    background: none;
  }
}
.drop_down_options{
    margin-right: 80px;
    width: 120px;
}
</style>