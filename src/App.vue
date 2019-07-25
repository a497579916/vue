<template>
    <div class="app-container">
        <mt-header fixed title="李津的Vue小项目"></mt-header>
        <!-- 顶部header区 -->
        
		<transition>
			<router-view></router-view>
		</transition>
		
		
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lijin" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lijin" to="/search">
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
	.mint-header{
		z-index: 99;
	}
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
