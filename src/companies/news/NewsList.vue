<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id ">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time|time}}</span>
                                <span>点击次数:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'  //引入 mint-ui  按需加载  每个页面
export default {
    data(){
        return {
            newslist:[]  ///新闻列表
        }
    },
    created(){
        this.getNewsList();//执行获取新闻列表的方法
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status === 0){
                    this.newslist = result.body.message
                }else{
                    Toast('获取新闻列表失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{ 
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between
        }
    }
}
</style>
