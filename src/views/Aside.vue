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
      :collapse="isCollapse"
    >
      <el-menu-item index="1">
        
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
import bus  from '../plugins/eventBus'
export default {
  data() {
    return {
      isCollapse: true,
      clientHeight:
        document.documentElement.clientHeight || document.body.clientHeight,
    };
  },
  mounted() {
    window.onresize = () => {
      this.clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    };
    bus.$on('switchAside',data=>{
     this.isCollapse = !this.isCollapse
     this.$emit('switchAsideindex',this.isCollapse)
    })
  }
};
</script>

<style lang="less" scope>
.aside-content{
    
}
</style>