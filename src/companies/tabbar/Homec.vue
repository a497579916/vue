<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中 使用vfor 一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                   <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
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
export default {
    data(){
        return {
            lunbotuList:[]//保存轮播i图的数组
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){//获取轮播图数据的方法
            var api = 'http://www.liulongbin.top:3005/api/getlunbo';
            this.$http.get(api).then(result => {
                console.log(result)
                if(result.body.status === 0 ){
                    this.lunbotuList = result.body.message
                   
                }else{
                    Toast('加载轮播图失败')
                }
            })

        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
       &:nth-child(1){
           background-color: pink
       }
       &:nth-child(2){
           background-color: black
       }
       &:nth-child(3){
           background-color: red
       }
       img{
           width: 100%;
           height: 100%;
        }

    }
}
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
