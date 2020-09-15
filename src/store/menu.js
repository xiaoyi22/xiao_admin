const state = {
  options: [{
    route: 'public/index',
    name: '首页'
  }],
  activeIndex: 'public/index'
}

const mutations = {
  SET_OPTIONS: (state, data) => {
    state.options = data
  },
  // 添加tabs
  ADD_TABS: (state, data) => {
    state.options.push(data);
    localStorage.setItem('menuOptions', JSON.stringify(state.options))
  },
  // 删除tabs
  DELETE_TABS: (state, data) => {
    let index = 0;
    for (let option of state.options) {
      if (option.route === route) {
        break;
      }
      index++;
    }
  },
  // 设置当前激活的tab，route
  SET_ACTIVE_NDEX: (state, index) => {
    state.activeIndex = index;
    localStorage.setItem('menuIndex', state.activeIndex)
  },
}
const actions = {
    addTabs({commit},info){
        commit('ADD_TABS',info)
    },
    deleteTabs({commit},info){
        commit('DELETE_TABS',info)
    },
    setActiveIndex({commit},info) {
        commit('SET_ACTIVE_NDEX',info)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
