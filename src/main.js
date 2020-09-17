import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './plugins/element.js'
import './plugins/api.js'
import echarts  from 'echarts'
import api  from './plugins/api'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$api_req =api;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
