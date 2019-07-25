<template>
<!-- 使用watch 属性来监听 父组件传递过来的max值  -->
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 分析 子组件 生命时候把数据传递给父组件 -->
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        //初始化数字选择框
        mui('.mui-numbox').numbox();
    },
    methods:{
        countChanged(){//每当 文本框的数据被修改的时候，立即把最新的数据 通过事件调用 传递给父组件
            this.$emit('getCount',parseInt(this.$refs.numbox.value))
        }
    },
    props:['max'],
    watch:{
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
