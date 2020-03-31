import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//Vue.component('ValidationProvider', ValidationProvider);
Vue.use(ElementUI);

let myVue =new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
