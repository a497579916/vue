<template>
    <div class="newsinfo-content">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time|time}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'  //引入 mint-ui  按需加载  每个页面

import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
          id:this.$route.params.id,   //将url 地址传递过来的 id值  挂载到data上 方便之后调用
          newsinfo:{}  //新闻对象
        }
    },
    created(){
        this.getNewsInfo();//执行获取新闻列表的方法
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0]
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{//用来注册子组件的节点
        'comment-box':comment
    }
}
</script>

<style lang="scss">
.newsinfo-content{
    padding: 0 10px;
    .title{
        font-size: 16px;
        color:red;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content:space-between
    }
    .content{
        img{
            width: 100%
        }
    }
}
</style>
