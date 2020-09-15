<template>
  <div class="aside-content">
    <div></div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      text-color="#ffffff"
      background-color="#263949"
      :style="{height:clientHeight+'px'}"
      router
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">页面管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">首页管理</el-menu-item>
          <el-menu-item index="2-1">详情页</el-menu-item>
          <el-menu-item index="2-1">其他</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/public/userManagement">
          <i class="el-icon-user"></i>
          <span>用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      clientHeight:
        document.documentElement.clientHeight || document.body.clientHeight,
    };
  },
  mounted() {
    window.onresize = () => {
      this.clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    };
  }
};
</script>

<style lang="less" scope>
.aside-content{
    width:210px;
}
</style>