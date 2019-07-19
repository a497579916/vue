
//这个main.js 是我们项目的入口文件
import Vue from 'vue'           //引入vue
import App from './App.vue'     //引入App根组件

import VueRouter from 'vue-router'  //1.1引入路由
Vue.use(VueRouter)                  //1.2.安装路由
import router from './router.js'      //1.3.导入自己的路由模块

import VueResource from 'vue-resource' //2.1导入vue-resource
Vue.use(VueResource)                    //2.2 安装 vue-resource



import { Header ,Swipe, SwipeItem } from 'mint-ui';  //引入 mint-ui组件  按需引入
Vue.component(Header.name, Header); //注册组件
Vue.component(Swipe.name, Swipe);    //注册组件
Vue.component(SwipeItem.name, SwipeItem); //注册组件

import './lib/mui/css/mui.css'    //引入 mui的 css
import './lib/mui/css/icons-extra.css'  //引入 mui 扩展图标


new Vue({
  el: '#app',
  render: c => c(App),
  router:router //1.4. 挂载路由到vm实例上
})

