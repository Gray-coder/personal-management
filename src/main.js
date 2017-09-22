import Vue from 'vue'
import App from './App'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Axios from 'axios'
import router from './router/index'

Vue.use(elementUI);
//引入mock.js
require('./util/mock');
Vue.config.productionTip = false;
Vue.prototype.axios = Axios;//全局应用axios请求

//先进入登录页面
router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next({path: '/login'})
  } else {
    next()
  }
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
