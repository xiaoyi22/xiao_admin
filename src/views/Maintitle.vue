<template>
  <div class="tabs-content—main">
    <div class="tabs-left-container">
      <i class="el-icon-s-fold" @click="switchAside"></i>
      <i class="el-icon-refresh-right"></i>
    </div>
    <div class="tabs-left-container-via">
      <img class="via" src="../assets/images/isyceo4jjlw.jpg" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{this.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>资料</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="tabs-right-container">
      <i class="el-icon-bell"></i>
      <i class="el-icon-full-screen"></i>
    </div>
    <el-tabs
      v-model="activeIndex"
      type="border-card"
      closable
      @tab-click="tabClick"
      @tab-remove="tabRemove"
    >
      <el-tab-pane
        :key="item.route"
        v-for="(item) in options"
        :label="item.name"
        :name="item.route"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import bus  from '../plugins/eventBus'
export default {
  data() {
    return {
      username:sessionStorage.getItem('username')
    };
  },
  methods: {
    // tab切换时，动态的切换路由
    tabClick(tab) {
      let path = this.activeIndex;
      if (path != this.$route.path) {
        this.$router.replace({ path: path });
      } else {
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
    switchAside(){
      bus.$emit("switchAside")
    }
  },
  computed: {
    options() {
      return this.$store.state.options;
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      },
    },
  },
  mounted() {
    console.log(this.via);
    if (this.options.length == 0) {
      this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.name,
      });
      this.$store.commit("set_active_index", this.$route.path);
    }
    this.$router.replace({ path: this.activeIndex });
  },
  watch: {
    $route(to) {
      let flag = false;
      for (let option of this.options) {
        if (option.route === to.path) {
          flag = true;
          this.$store.commit("set_active_index", to.path);
          break;
        }
      }
      if (!flag) {
        this.$store.commit("add_tabs", { route: to.path, name: to.name });
        this.$store.commit("set_active_index", to.path);
      }
    },
  },
};
</script>

<style lang="less">
.tabs-content—main {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  .tabs-left-container {
    float: left;
    height: 50px;
    i {
      margin: 0 0 0 20px;
      font-size: 22px;
      line-height: 50px;
    }
  }
}
.tabs-right-container {
  float: right;
  margin-right: 20px;
  i {
    margin: 0 0 0 20px;
    font-size: 22px;
    line-height: 50px;
  }
}
.tabs-left-container-via {
  float: right;
  margin-right: 20px;
  .via {
    display: inline-block;
    position: absolute;
    top: 6px;
    right: 100px;
    width: 35px;
    height: 35px;
    line-height: 50px;
    border-radius: 50%;
  }
  span {
    margin-left: 56px;
    line-height: 50px;
  }
}

/*  update element stylesheet*/
.el-tabs--border-card {
  border: none;
  box-shadow: none;
  margin-left: 100px;
  width: 70%;
}
.el-tabs--border-card > .el-tabs__content {
  display: none;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: white;
  border: none;
  .el-tabs__item {
    margin-top: 1px;
    height: 50px;
    line-height: 50px;
    border: none;
    border-top: 2px solid #ffffff;
  }
  .el-tabs__item.is-active {
    margin-top: 1px;
    text-align: center;
    border-radius: 1px;
    border-top: 2px solid #566270;
  }
}
</style>