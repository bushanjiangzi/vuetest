import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index'
//import com from './js/commen';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './assets/vendor/mui/dist/css/mui.css'

//引入mock模块
const Mock = require('./mock');

Vue.config.productionTip = false;

Vue.use(MintUI)

new Vue({
  el: '#app',
  Mock:Mock,
  router: router,
  render: c => c(App)
})
