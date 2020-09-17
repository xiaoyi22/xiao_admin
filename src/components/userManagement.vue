<template>
  <div class="userManagementContent">
      <div class="listUsers">
        <div></div>
        <div class="usersForm">
            <el-table >
              <el-table-column type="selection" width="60" align="center"></el-table-column>
              <el-table-column align="center" prop="useranme" label="用户名" column-key="username">
              </el-table-column>
              <el-table-column align="center" prop="password" label="密码" column-key="username">
              </el-table-column>
              <el-table-column align="center" prop="address" label="地址" column-key="username">
              </el-table-column>
              <el-table-column align="center" prop="iphone" label="电话" column-key="username">
              </el-table-column>
              <el-table-column align="center" prop="level" label="等级" column-key="username">
              </el-table-column>
            </el-table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[],
    }
  },
  mounted(){
    let token = sessionStorage.getItem('token');
    console.log(token)
    this.$api_req.getUserList('getUserList',{},token)
  }
}
</script>

<style lang="less" scoped>
.userManagementContent{
  .listUsers{
    width:98%;
    margin:15px auto;
    height: 400px;
    background: #ffffff;
    .usersForm{

    }
  }
}
</style>