<template>
	<div class="mui-content">
		<div id="slider" class="mui-slider v-slider">
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../../assets/images/index/slide01.jpg">
						
					</a>
					<p class="pColor mui-slider-title">红色和白色怎么搭配</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/index/slide02.png">
						
					</a><p class="pColor mui-slider-title">今年流行什么连衣裙</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/index/slide03.jpg">
						
					</a><p class="pColor mui-slider-title">运动鞋配裙子 唯美与动感的融合</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/index/slide04.jpg">
						
					</a><p class="pColor mui-slider-title">男人乐福鞋搭配</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/index/slide05.png">
						
					</a><p class="pColor mui-slider-title">宣致蜗牛焕颜亮肤水嫩面膜 逆转时光 再现年轻美肌</p>
				</div>
				<div class="mui-slider-item">
					<a href="#">
						<img src="../../assets/images/index/slide01.jpg">
						
					</a><p class="pColor mui-slider-title">红色和白色怎么搭配</p>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../../assets/images/index/slide02.png">
						
					</a><p class="pColor mui-slider-title">今年流行什么连衣裙</p>
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
		bottom: 0;
		margin: 0;
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
	
</style>