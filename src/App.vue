<template>
    <div class="container">
        <mt-header fixed title="李津的Vue小项目">
			 <span slot="left" @click="goBack" v-show="flag">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>
        <!-- 顶部header区 -->
        <div class="app-container">	
			<transition>
				<router-view></router-view>
			</transition>
        </div>	
		
		
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lijin" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/member">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">关于</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/search">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">登录</span>
			</router-link>
		</nav>
        <!-- 中间 路由区 -->
        
        <!-- 底部区域 -->

        
    </div>
</template>
<script>
export default {
	data() {
		return {
			flag:false
		}
	},
	created(){
		this.flag = this.$route.path === '/home' ? false : true;
	},
	methods:{
		goBack(){
			this.$router.go(-1);
		}
	},
	watch:{
		'$route.path':function(newVal){
			if(newVal === "/home"){
				this.flag=false
			}else{
				this.flag=true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.mint-header{
		z-index: 99;
	}
	.container{
		/* 顶上的状态蓝固定定位 */
		padding-top: 40px;
		/* 底线的nav绝对定位 */
		padding-bottom: 50px;
	}
    .app-container{
        overflow-x: hidden;
    }
 
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.3s ease
	}

	//改类名 解决tabbar 点击无法切换的问题
	.mui-bar-tab .mui-tab-item-lijin.mui-active {
    	color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-lijin {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item-lijin .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-lijin .mui-icon ~ .mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
