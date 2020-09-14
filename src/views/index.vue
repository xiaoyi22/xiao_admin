<template>
  <el-container>
  <el-aside style="width:210px"><Aside/></el-aside>
  <el-container>
    <el-header style="padding:0"><Header/></el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
export default {
    components:{
        Aside,
        Header
    },
}
</script>

<style>

</style>