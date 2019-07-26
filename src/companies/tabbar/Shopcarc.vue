<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                            <!--问题:如何从购物车中获取商品的数量呢-->
                            <!-- 1.我们可以先创建一个空对象,然后循环购物车中所有商品的数据，把当前循
                            环这条商品的Id,作为对象的属性名,count值作为对象的属性值,这样,当把
                            所有的商品循环一遍,就会得到一个对象: { 88: 2,89:1,90:4} -->

                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>

                        </div>
					</div>
				</div>
			</div>

        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件,总价 ￥  <span class="red">{{ $store.getters.getGoodsCountAndAmount.amount }}</span> </p>
                        </div>
                        <mt-button type="danger" @click="tishi">去结算</mt-button>
					</div>
                    
				</div>
		</div>
        <!-- {{$store.getters.getGoodsSelected}} -->
    </div>
</template>


<script>
import { Toast } from "mint-ui";
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
            goodslist:[]//购物车商品数据
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            //1.获取到store中所有的商品id 拼接出一个用逗号分隔的字符串
            var idArr = []
            this.$store.state.car.forEach(item=>idArr.push(item.id))
            //如果没有商品 直接 return 出去
            if(idArr.length <= 0){
                return
            }
            this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = result.body.message
                }
            })
        },
        remove(id,index){
            //点击删除 把商品冲 store 中根据id删除 同时 把当前组件中的 goodslist 中 对应要删除的那个商品 使用index来删除
            this.goodslist.splice(index,1)
            this.$store.commit('removeFormCar',id)

        },
        selectedChanged(id,val){
            //每当点击开关 把最新的开光状态 同步到store中
            // console.log(id,value)
            this.$store.commit('updateGoodsSelected',{id:id,selected:val});
            
        },
        tishi(){
            Toast('等待开发')
        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color:red;font-weight: bold;
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color:red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
