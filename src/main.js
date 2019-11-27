import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import '../src/common.css'
import moment from 'moment'
// vue组件全局导入
import OrderPane from './components/OrderPane'
Vue.component("briup-order-pane",OrderPane)
Vue.config.productionTip = false
// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
