<template>
    <div>
        <!-- 将来 谁使用此组件 谁为我们传递lunbotulist -->
        <!-- 此刻 轮播图list 应该是父组件向子组件传值 来设置 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中 使用vfor 一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 分析:为什么 商品评论中的 轮播图 那么丑 -->
    <!-- 首页中的图片 它的宽和高 都是使用了 100% 的宽度 -->
    <!-- 在商品详情页面中,轮播图的图片 如果 也使用 宽高为100%页面 不好看 -->
    <!-- 商品详情页面中的轮播图 期望高度是100% 宽度为自适应 -->
    <!-- 结果分析  得到问题的原因:首页中的轮播图 和 详情中的轮播图 分歧点是宽度到底是100% 还是自适应-->
    <!-- 既然这两个轮播图 其他方面都是没有冲突的 只是 宽度有分歧 那么我们可以 定义一个 属性 让使用轮播图的调用者 手动指定是否为100%的宽度 -->

</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:["lunbotuList",'isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        text-align: center;
       
       img{
        //    width: 100%;
           height: 100%;
        }

    }
}
.full{
    width: 100%;
}
</style>
