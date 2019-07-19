import VueRouter from 'vue-router'  //引入 路由组件
//导入对应的组件
import HomeContainer from './companies/tabbar/Homec.vue'
import MemberContainer from './companies/tabbar/Memberc.vue'
import ShopcarContainer from './companies/tabbar/Shopcarc.vue'
import SearchContainer from './companies/tabbar/Searchc.vue'


var router = new VueRouter({
    routes: [ //配置路由规则
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/', redirect: '/home' },
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类 默认的类叫做 router-link-active
})

export default router //把路由对象暴露出去