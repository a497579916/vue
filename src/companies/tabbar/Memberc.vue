<template>
    <div class="Memberc">
        <div class="head">
            <img src="../../images/head.png" alt="">
            <p>李津</p>
        </div>
        
        <div class="mui-card">
				<div class="mui-card-header">项目名称:Vue小项目</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                    
					<p>	项目框架:Vue 2.X</p>
                    <p> UI 框架:Mint UI  mui</p>
                    <p> 打包工具:webpack</p>
					</div>
				</div>
				<!-- <div class="mui-card-footer">页脚</div> -->
		</div>
        <div class="mui-card">
				<div class="mui-card-header">作者：李津</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                    
					<p>	电话：18323406700</p>
                    <p> 邮箱：497579916@qq.com</p>
                    
					</div>
				</div>
				<a class="mui-card-footer" href="tel:18323406700">
                    
                   <img src="../../images/phone.png" alt=""> 联系我
                    
                </a>
		</div>


    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.Memberc{
    text-align: center;
    padding-top:15px;
    .head{
        p{
            font-size: 16px
        }
    }
    .mui-card{
        text-align: left;
        box-shadow: 0px 0px 5px #999;
        .mui-card-footer{
            justify-content: flex-start;
           
            img{
                height: 20px;
            }
        }
    }

}
</style>
