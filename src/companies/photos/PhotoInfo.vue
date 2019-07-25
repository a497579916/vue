<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|time}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="suoluetu">
            <vue-preview :slides="list" @close="getThumbs"></vue-preview>
        </div>
        
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>

        <!-- 放置一个评论子组件 -->
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,//从路由中获取到的图片id
            photoinfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
        
    },
    methods:{
        getPhotoInfo(){
            //获取图片的详情
            this.$http.get('api/getimageInfo/' + this.id).then(result=>{
                if(result.body.status ===0){
                    this.photoinfo = result.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(result=>{
                if(result.body.status === 0){
                    //循环每个图片数据 不全图片的宽和高
                    result.body.message.forEach(item => {
                        item.msrc = item.src,
                        item.w = 600;
                        item.h = 400;
                    });
                    //把完整的数据保存到list中
                    this.list = result.body.message
                }
            })
        }//获取缩略图
    },
    components:{//用来注册子组件的节点
        'comment-box':comment
    }
}
</script>

<style lang="scss">
.photoinfo-container{
    padding: 3px;
    h3{
        color:#26A2FF;
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 25px;
        text-indent: 25px;
    }
    .suoluetu{
        display: grid;
        
    //    border:1px solid red;
       
       img{
           width: 25%;
        //    height:80px;
           margin-left: 20px;
           margin-bottom: 10px;
           float: left;
        
          
       }
    }
}
</style>
