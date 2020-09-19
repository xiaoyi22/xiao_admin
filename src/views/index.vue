<template>
  <el-container>
    <el-aside>
      <Aside ref="Aside" />
    </el-aside>
    <el-container>
      <!-- <el-header style="padding:0">
        <Header />
      </el-header>-->
      <el-main style="background:#F5F5F5;padding:0">
        <div>
          <MainTitle />
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
import MainTitle from "./Maintitle";
export default {
  components: {
    Aside,
    Header,
    MainTitle,
  },
  mounted(){
    this.$on('switchAsideindex',data=>{
      
    })
  }
};
</script>

<style>
</style>