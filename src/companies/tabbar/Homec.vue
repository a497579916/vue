<template>
    <div>
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/photolist">
		                   <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/GoodsList">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                   <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                   <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                   <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
    </div>
</template>


<script>
import {Toast} from 'mint-ui'  //引入 mint-ui  按需加载
import { constants } from 'crypto';
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return {
            lunbotuList:[{"id":1,"img":"http://img2.a0bi.com/upload/ttq/20150509/1431134012326.jpg","msg":""},
        {"id":2,"img":"https://desk-fd.zol-img.com.cn/t_s1366x768c5/g2/M00/01/04/ChMlWl01IDqIBVOpAAMrNjO954YAAL-hgEv9cgAAytO394.jpg"},
        {"id":3,"img":"https://desk-fd.zol-img.com.cn/t_s1366x768c5/g5/M00/09/0F/ChMkJ1sD_zyIf0wUAAP3iWjtWAsAAoiWwOhOfoAA_eh287.jpg"},
        {"id":4,"img":" https://desk-fd.zol-img.com.cn/t_s1366x768c5/g5/M00/09/0F/ChMkJlsD_zyIJj1kAAMvTsEzzhUAAoiWwOaeHkAAy9m325.jpg"}],//保存轮播i图的数组
            img:[]
        }
    },
    created(){
        // this.getLunbotu()
    },
    methods:{
        getLunbotu(){//获取轮播图数据的方法
        //    this.$http.get('/companies/tabbar/img.json').then(result=>{
        //         this.lunbotuList = result.body.message
        //         console.log(result)
        //    })
            // this.$http.get('api/getlunbo').then(result => {
            //     console.log(result)
            //     if(result.body.status === 0 ){
            //         this.lunbotuList = result.body.message
            //         console.log(result)
                   
            //     }else{
            //         Toast('加载轮播图失败')
            //     }
            // })

        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    img{
        width: 60px;
    }
    .mui-media-body{
        font-size: 13px  !important;
    }
}
</style>
