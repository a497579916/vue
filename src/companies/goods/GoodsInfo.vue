<template>
  <div class="goodsinfo-container">
    <transition
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter">
        
        <div class="ball" v-if="flag" ref="ball"></div>
        
        
        
    </transition>
    
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.titel}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp; 销售价 <span class="now_price">￥{{goodsinfo.sell_price}}</span>
                
            </p>
            <p>购买数量：<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
            <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addToShopCar">
                    <span class="mui-icon-extra mui-icon-extra-cart">
                    </span>
                    加入购物车
                </mt-button>
                <!-- 分析：如何实现加入购物车 拿到选择的数量 -->
                <!-- 1.经过分析发现：按钮属于goodsinfo 页面 数字 属于 numberbox 组件 -->
                <!-- 2.由于涉及到了父子组件嵌套了，所以 无法直接在goodsinfo 页面中 获取到选择的商品数量值 -->
                <!-- 3.如何解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                <!-- 4.事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数 传递给这个方法 -->
            </p>
        </div>
      </div>
      
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <p>商品货号：{{goodsinfo.goods_no}}</p>
        <p>库存情况：{{goodsinfo.stock_quantity}}</p>
        <p>上架时间：{{goodsinfo.add_time|time}}</p>
      </div>
      <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDese(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
//导入轮播图组件
import swiper from '../subcomponents/swiper.vue'
//导入数字选择框
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbotu:[],
            goodsinfo:{},  //获取到的商品信息
            flag:false, //小球标识符
            SelectedCount:1//保存用户选择的商品数量 默认 认为用户买一个
        }
    },
    created(){
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/' + this.id).then(result=>{
               if(result.body.status === 0){
                   //先循环轮播图数组的每一项 为item添加img属性 因为轮播图组件中 只人生item.img 不认识 item.src
                   result.body.message.forEach(item => {
                       item.img = item.src
                   });
                   this.lunbotu = result.body.message;
               }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0]
                }
            })
        },
        goDese(id){
            //点击使用编程式导航
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
            //点击跳转评论
            this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopCar(){
            //添加到购物车
            this.flag = !this.flag;
            //拼接出一个要保存到store中的car对象
            var goodsinfo = {
                id:this.id,
                count:this.SelectedCount,
                price:this.goodsinfo.sell_price,
                selected:true
            }
                //调用store 中的  addtoCar push进去
            this.$store.commit("addToCar",goodsinfo);

        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)"
        },
        enter(el,done){
            el.offsetWidth;
            // this.$refs.move.style.transition = linear;
            //获取小球的 在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();//小球在页面中的位置
            const badgePosition = document.getElementById('badge').getBoundingClientRect();//徽标在页面中的位置
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterEnter(el){
             this.flag = !this.flag;
            
        },
        getSelectedCount(count){
            //当子组件把选中的数量 传递给 父组件的时候，把选中的值保存到data上
            this.SelectedCount = count;
           
        }


    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color:#f40;
        font-size: 14px;
        font-weight: bold;
    }

    .mui-card-footer{
        display: block;
        button{
            margin:15px 0;
        }
    }
    .mui-card-content{
        p{
            margin-left:15px;
        }
        
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius:50%;
        background-color: red;
        position: absolute;
        top: 390px;
        left: 163px;
        z-index: 99;
       
    }
    .mui-icon-extra{
        font-size: 17px;
    }
}

</style>
