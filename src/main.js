import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(ElementUI);
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
  el: '#app',
  render: h => h(App)
}).$mount('#app')
