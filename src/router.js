import VueRouter from 'vue-router'  //引入 路由组件
//导入对应的组件
import HomeContainer from './companies/tabbar/Homec.vue'
import MemberContainer from './companies/tabbar/Memberc.vue'
import ShopcarContainer from './companies/tabbar/Shopcarc.vue'
import SearchContainer from './companies/tabbar/Searchc.vue'
import NewsList from './companies/news/NewsList.vue'
import NewsInfo from './companies/news/NewsInfo.vue'
import PhotoList from './companies/photos/PhotoList.vue'
import PhotoInfo from './companies/photos/PhotoInfo.vue'
import GoodsList from './companies/goods/GoodsList.vue'
import GoodsInfo from './companies/goods/GoodsInfo.vue'
import GoodsDesc from './companies/goods/GoodsDesc.vue'
import GoodsComment from './companies/goods/GoodsComment.vue'


var router = new VueRouter({
    routes: [ //配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/home/newslist', component: NewsList},
        { path: '/home/newsinfo/:id', component: NewsInfo},
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/PhotoInfo/:id', component: PhotoInfo },
        { path: '/home/GoodsList', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo },
        { path: '/home/goodsdesc/:id', component: GoodsDesc ,name:'goodsdesc'},
        { path: '/home/goodscomment/:id', component: GoodsComment ,name:'goodscomment'}


        
        

    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类 默认的类叫做 router-link-active
})

export default router //把路由对象暴露出去