//引入vue
import Vue from 'vue'
//引入element-ui
import ElementUI from 'element-ui' 
//引入element-ui样式文件
import 'element-ui/lib/theme-chalk/index.css' 
//引入顶级组件
import App from './App.vue'
//引入路由
import router from './router'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
