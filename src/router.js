import VueRouter from 'vue-router'  //引入 路由组件
//导入对应的组件
import HomeContainer from './companies/tabbar/Homec.vue'
import MemberContainer from './companies/tabbar/Memberc.vue'
import ShopcarContainer from './companies/tabbar/Shopcarc.vue'
import SearchContainer from './companies/tabbar/Searchc.vue'
import NewsList from './companies/news/NewsList.vue'
import NewsInfo from './companies/news/NewsInfo.vue'


var router = new VueRouter({
    routes: [ //配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList},
        { path: '/home/newsinfo/:id', component: NewsInfo},
        

    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类 默认的类叫做 router-link-active
})

export default router //把路由对象暴露出去