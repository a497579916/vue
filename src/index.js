//这个main.js 是我们项目的入口文件
import Vue from 'vue'           //引入vue
import App from './App.vue'     //引入App根组件

import { Header } from 'mint-ui';  //引入 mint-ui组件
Vue.component(Header.name, Header); //注册组件

import './lib/mui/css/mui.css'


new Vue({
  el: '#app',
  render: c => c(App)
})
