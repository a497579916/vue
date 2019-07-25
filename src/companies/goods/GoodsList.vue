<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" tag="div" :to="'/home/goodsinfo/' + item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
        <br>
    </div>
</template>

<script>
export default {
    data(){
        //data是 往自己组件内部 挂载一些私有数据的
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList();//调用
    },
    methods:{
        getGoodsList(){ 
            //获取商品列表
            this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result=>{
                if(result.body.status === 0){
                    // this.goodslist = result.body.message
                    this.goodslist = this.goodslist.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList()
        },
        goDetail(id){
            //使用js形式进行导航
            //注意：要区分 this.$route 和 this.router 这两个对象
            //其中 this.$route 是路由参数对象 所有路由中的参数 params query 都属于它
            //其中 this.$router 是一个路由导航对象，用它 可以方便的 使用js代码 实现路由的前进 后退 跳转到新的url地址
            this.$router.push('/home/goodsinfo/' + id)
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px 7px 15px 7px;
    .goods-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc; 
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
            color:#666;
        }
        .info{
            background-color: #eee;

            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color:#f40;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                     text-decoration: line-through;  
                     font-size: 12px;
                     margin-left: 10px;
                }
            }
            .sell{
               display: flex;
               justify-content: space-between;
               font-size: 12px;
            }
        }
    }
}
</style>
