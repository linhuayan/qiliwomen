<template>
	<div class="mui-content">
		<div id="slider" class="mui-slider v-slider">
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider01.png">
						
					</a>
					<p class="pColor mui-slider-title">衬衫怎么穿才好看 初秋这样穿更时髦 </p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider02.png">
						
					</a><p class="pColor mui-slider-title">2018秋冬流行什么颜色</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider03.png">
						
					</a><p class="pColor mui-slider-title">男生怎么买衣服技巧 </p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider04.jpg">
						
					</a><p class="pColor mui-slider-title">男生运动裤怎么穿好看 复古时髦的秋季单品 </p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider05.png">
						
					</a><p class="pColor mui-slider-title">秋天穿什么外套好看 </p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider01.png">
						
					</a><p class="pColor mui-slider-title">衬衫怎么穿才好看 初秋这样穿更时髦 </p>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../../assets/images/beauty/b-slider02.png">
						
					</a><p class="pColor mui-slider-title">2018秋冬流行什么颜色 </p>
				</div>
			</div>
			<div class="mui-slider-indicator mui-text-right" id="slider-right">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>	
	</div>
</template>

<script>
</script>

<style scoped="scoped">
img{
margin: 0;
margin-bottom: 22px;

}
	.pColor{
		background: rgba(255,255,255,1);
		color: #666;
		overflow: hidden;
		width: 100%;
		/*bottom: -30px;*/
	}
	.mui-content {
        padding-top: 88px;
    }
	/*.mui-slider .mui-slider-group .mui-slider-item {
		width: 100%;
		height: 142%;
	}*/
	.mui-slider-title{
		height: 20px;
		line-height: 20px;
	}
	#slider-right{
		width: calc(100% - 12px);
		bottom: 0;
		margin: 0 0px;
		border-bottom: 1px solid #dadadd;
	}
	.mui-slider-indicator .mui-active.mui-indicator{
		background: #FF7799;
		border: none;
		
	}
	.mui-slider-indicator .mui-indicator{
		background: #fff;
		margin:1px 1px;
	}
	.mui-slider-indicator .mui-active .mui-indicator {
	    background: #ff7799;
	    
	}
</style>