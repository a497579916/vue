
//这个main.js 是我们项目的入口文件
import Vue from 'vue'           //引入vue
import App from './App.vue'     //引入App根组件

import VueRouter from 'vue-router'  //1.1引入路由
Vue.use(VueRouter)                  //1.2.安装路由
import router from './router.js'      //1.3.导入自己的路由模块

import VueResource from 'vue-resource' //2.1导入vue-resource
Vue.use(VueResource)                    //2.2 安装 vue-resource

Vue.http.options.root = 'http://www.liulongbin.top:3005'             //设置请求的根路径
Vue.http.options.emulateJSON = true           //全局设置post请求表单数据

// import { Header ,Swipe, SwipeItem ,Button ,Spinner,Lazyload} from 'mint-ui';  //引入 mint-ui组件  按需引入
// Vue.component(Header.name, Header); //注册组件
// Vue.component(Swipe.name, Swipe);    //注册组件
// Vue.component(SwipeItem.name, SwipeItem); //注册组件
// Vue.component(Button.name, Button);//注册组件
// Vue.component(Spinner.name, Spinner); //注册加载组件
// Vue.use(Lazyload);//懒加载组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'    //引入 mui的 css
import './lib/mui/css/icons-extra.css'  //引入 mui 扩展图标

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// Vue.filter('time',function(data){  //注册一个全局时间过滤器
//   var dt=new Date(data);
//   var y = dt.getFullYear();
//   var mon = dt.getMonth().toString().padStart(2,'0');
//   var d = dt.getDate().toString().padStart(2,'0');
//   var h = dt.getHours().toString().padStart(2,'0');
//   var m = dt.getMinutes().toString().padStart(2,'0');
//   var s = dt.getSeconds().toString().padStart(2,'0');
//   return `${y}-${mon}-${d} ${h}:${m}:${s}`
// });

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('time', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

new Vue({
  el: '#app',
  render: c => c(App),
  router:router //1.4. 挂载路由到vm实例上
})


