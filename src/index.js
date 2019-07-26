
//这个main.js 是我们项目的入口文件
import Vue from 'vue'           //引入vue
import App from './App.vue'     //引入App根组件

import Vuex from 'vuex'    //引入vuex
Vue.use(Vuex)             //注册vuex

//每次进入网站 肯定会调用 index.js
var car = JSON.parse(localStorage.getItem('car') || '[]')

let store = new Vuex.Store({
  //大家可以把state想象成组件中的data 专门用来存储数据的
  state:{
    car:car //将购物车中的商品数据 用一个数组存储起来  在car 数组中 存储一些商品的
          //对象 咋们可以暂时将 商品对象 设计成这个样子{id:商品id，count:'要购买的数量'，price:'商品的单价'，selected:false}
  },
  mutations:{
    //注意：如果要操作store中的state值 只能通过调用 mutations提供的方法 才能操作
    //对应数据，不推荐直接操作state 中的数据，因为万一导致了数据的紊乱 不能快速定位到错误的原因
    //因为 每个组件 都可能有 操作数据的方法
    addToCar(state,goodsinfo){  
        //点击加入购物车 把商品信息 添加到 state 中的 car上
        //分析：
        //1，如果购物车中 之前就有这个对应的商品了 那么 只需要更新数量
        //2.如果没有 则直接把商品数据 push 到car 中即可
        // 假设在购物车中 没有找到对应的商品
        var flag = false;
        state.car.some(item=>{
          if(item.id===goodsinfo.id){
            item.count += parseInt(goodsinfo.count);
            flag = true
            return true
          }
        })
        if(!flag){ //如果 最终循环完毕 得到的flag还是false 直接push 进购物车
          state.car.push(goodsinfo)
        }
        //当更新 car之后 把car数组 存储到本地 localstorage 中
        localStorage.setItem('car',JSON.stringify(state.car))
        
    },
    updateGoodsInfo(state,goodsinfo){
       //修改购物车中 商品的数量值
       //分析：
       state.car.some(item=>{
         if(item.id==goodsinfo.id){
           item.count = parseInt(goodsinfo.count)
           return true
         }
       })
       localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormCar(state,id){
      //根据id从 store中的购物车中删除 对应的那条商品数据
      state.car.some((item,i)=>{
        if(item.id == id){
          state.car.splice(i,1)
          return true
        }
      })
      //当更新 car之后 把car数组 存储到本地 localstorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsSelected(state,info){
      
      state.car.some(item=>{
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      //当更新 car之后 把car数组 存储到本地 localstorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    }

    //注意：如果组件想要调用mutations中的方法 只能使用 this.$store.commite('方法名')
    //这种调用 mutations 方法的格式 和 this.$emit('方法名')
  },
  getters:{
    //注意 这里的getters 只负责 对外提供 数据 不负责 修改数据 如果需要修改 state中的数据，
    //请去 找mutations
    getAllCount:function(state){
       var c = 0;
       state.car.forEach(item=>{
         c += item.count
       })
       return c
    },
    getGoodsCount(state){
      var o = {}
      state.car.forEach(item=>{
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o ={}
      state.car.forEach(item=>{
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      let o = {
        count:0,  //勾选的数量
        amount:0  //勾选的总价
      }
      state.car.forEach(item=>{
        if(item.selected){
          o.count += item.count
          o.amount += item.price * item.count
        }
        
      })
      return o
      

    }
    
    //经过 回顾对比 getters 中的方法 和组件中的过滤器比较类似 因为过滤器和getters都没有修改原数据
    //都是把原数据 做了一层包装 提供给了调用者，
    //其次，getters 也和 computed 比较像 只要state 中的数据发生变化 那么 如果 getters正好也引用了这个数据
    //那么就会立即触发 getters的重新求值

  }
})


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
import { S_IFIFO } from 'constants';
// 定义全局的时间过滤器
Vue.filter('time', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

new Vue({
  el: '#app',
  render: c => c(App),
  router:router, //1.4. 挂载路由到vm实例上
  store:store  // veux 实例对象挂载到实例上
})


