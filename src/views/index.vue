<template>
  <el-container>
    <el-aside style="width:210px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header style="padding:0">
        <Header />
      </el-header>
      <el-main style="background:#F5F5F5;padding:0">
        <div>
          <el-tabs
            v-model="activeIndex"
            type="border-card"
            closable
            @tab-click="tabClick"
            @tab-remove="tabRemove"
           style="background:#ffffff;height:35px">
            <el-tab-pane
              :key="item.route"
              v-for="(item) in options"
              :label="item.name"
              :name="item.route"
            ></el-tab-pane>
          </el-tabs>
           <router-view></router-view>
        </div>
       
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
export default {
  components: {
    Aside,
    Header,
  },
  methods: {
    // tab切换时，动态的切换路由
    tabClick(tab) {
      let path = this.activeIndex;
      if(path !=this.$route.path){
        this.$router.replace({path: path});
      } 
      else{

      }
    },
    tabRemove(targetName) {
      // 首页不可删除
      if (targetName == "/public/index") {
        return;
      }
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit(
            "set_active_index",
            this.options[this.options.length - 1].route
          );
          this.$router.replace({ path: this.activeIndex });
        } else {
          this.$router.replace({ path: "/public/index" });
        }
      }
    },
  },
  computed: {
    options(){
        return this.$store.state.options
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex;
      },
      set (val) {
        this.$store.commit('set_active_index', val);
      }
    }
  },
  mounted(){  
     if(this.options.length==0){
       this.$store.commit('add_tabs',{route: this.$route.path, name: this.$route.name});  
        this.$store.commit('set_active_index', this.$route.path);
     }
      this.$router.replace({path:this.activeIndex});
       
  },
  watch: {
    '$route'(to) {
      let flag = false;
      for (let option of this.options ) {
        if (option.route === to.path) {
          flag = true;
          this.$store.commit('set_active_index', to.path);
          break
        }
      }
      if (!flag) {
        this.$store.commit('add_tabs', {route: to.path, name: to.name});
        this.$store.commit('set_active_index', to.path);
      }
    }
  }
};
</script>

<style>
</style>