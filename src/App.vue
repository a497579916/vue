<template>
    <div class="app-container">
        <mt-header fixed title="李津的Vue小项目"></mt-header>
        <!-- 顶部header区 -->
        
		<transition>
			<router-view></router-view>
		</transition>
		
		
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        <!-- 中间 路由区 -->
        
        <!-- 底部区域 -->

        
    </div>
</template>
<script>

</script>

<style lang="scss" scoped>
    .app-container{
        padding-top:40px;
        padding-bottom: 40px;
		overflow-x: hidden;
    }
    .mint-header{
        // background-color: red
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
</style>
