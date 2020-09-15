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
            @tab-click="tabClick"
            @tab-remove="tabRemove"
          >
            <el-tabs-pane
              :closable="item.name ==='首页' ? false:true"
              :key="item.name"
              v-for="(item) in options"
              :label="item.name"
              :name="item.route"
            ></el-tabs-pane>
          </el-tabs>
        </div>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
export default {
  components: {
    Aside,
    Header,
    Main,
  },

  methods: {
    tabClick(tab) {
      this.$route.push({
        path: this.activeIndex,
      }); //路由跳转
    },
    tabRemove(targetName) {
      this.$store.dispatch("menu/deleteTabs", targetName);
      // 还需要同事处理一种需要移除的页面为当前页面时，将上一个tab页作为激活。
      if (this.activeIndex === targetName) {
        // 设置当前激活路由
        if (this.option && this.options.length >= 1) {
          this.$store.dispatch(
            "menu/setAciveIndex",
            this.options[this.options.length - 1].route
          );
          this.$route.push({
            path: this.activeIndex,
          });
        } else {
          this.$route.push({
            path: "/public/index",
          });
        }
      }
    },
  },
  computed: {
    options: {
      get() {
        return this.$store.state.menu.options;
      },
      set(val) {
        this.$store.dispatch("menu/addTabs", val);
      },
    },
    // 动态设置及获取当前激活的 tab 页
    activeIndex: {
      get() {
        return this.$store.state.menu.activeIndex;
      },
      set(val) {
        this.$store.dispatch("menu/setActiveIndex", val);
      },
    },
  },
  mounted() {
    let options = JSON.parse(window.localStorage.getItem("menuOptins"));
    this.activeIndex = localStorage.getItem("menuIndex");
    if (!options) {
      options = [];
      this.$route.push("/public/index");
      this.$store.commit("menu/SET_ACTIVE_NDEX", options.route);
    } else {
      this.$store.commit("menu/SET_OPTIONS", options);
    }
    // 设置当前激活的路由
    if (options && options.length >= 1) {
      for (var i = 0; i < options.length; i++) {
        if (options[i].route == this.activeIndex) {
          this.$store.dispatch("menu/setActiveIndex".options[i].route);
        }
      }
    } else {
      this.$route.push("public/index");
    }
  },
};
</script>

<style>
</style>