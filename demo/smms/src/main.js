//引入vue
import Vue from 'vue'
//引入axios
import axios from 'axios'
//引入element-ui
import ElementUI from 'element-ui' 
//引入element-ui样式文件
import 'element-ui/lib/theme-chalk/index.css' 
//引入顶级组件
import App from './App.vue'
//引入路由
import router from './router'

//引入公共样式表
import '@/styles/common.less'

//使用(注册vue)
Vue.use(ElementUI)
//吧axios挂在Vue原型上
Vue.prototype.axios = axios;
//阻止生产提示
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
