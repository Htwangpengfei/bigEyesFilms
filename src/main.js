import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 配置axios
Vue.prototype.$axios=axios;

import './assets/css/reset.css'

// 引入ant-design-vue
import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(antdv);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
