<template>
	
	<section>	
	
		<v-slide></v-slide>
		
			<ul class="content">
				<li>
					<router-link to="">
						<span class="bg bg1"></span>
						<p>护肤</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg2"></span>
						<p>彩妆</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg3"></span>
						<p>美发</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg4"></span>
						<p>搭配</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg5"></span>
						<p>配饰</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg6"></span>
						<p>街怕</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg7"></span>
						<p>减肥</p>
					</router-link>	
				</li>
				<li>
					<router-link to="">
						<span class="bg bg8"></span>
						<p>试用</p>
					</router-link>	
				</li>
			</ul>
			<v-list></v-list>
		</section>
	
</template>

<script>
	import vslide from './slide.vue'
	import vlist from './list.vue'
	export default{
		components:{
		  	'v-slide':vslide,
		  	'v-list':vlist
		},
		mounted(){
			var vm=this;
			vm.mui.init();
			vm.$nextTick(function(){
				
				mui("#slider").slider({
					interval: 3000
				})
				

				
			})
		}
	}
</script>

<style scoped="">
	.content{
		width: 100%;
		overflow: hidden;
		background: #fff;
	}
	ul>li{
		float: left;
		width: 25%;
	}
	a{
		width: 100%;
		display: block;
		padding: 10px 0;
		
	}
	.bg{
		display: block;
		width: 55px;
		height: 55px;
		border-radius: 20px;
		margin: 0 auto;
	}
	p{
		text-align: center;
		font-size: 16px;
		margin: 4px 0;
		color: #707070;
	}
	.bg1{
		background: url(../../assets/images/grid-icon1.png)  no-repeat center center #FF5053;
		background-size: 70%;
	}
	.bg2{
		background: url(../../assets/images/grid-icon-2.png)  no-repeat center center #cc99cc;
		background-size: 70%;
	}
	.bg3{
		background: url(../../assets/images/grid-icon-3.png)  no-repeat center center #ffad5c;
		background-size: 70%;
	}
	.bg4{
		background: url(../../assets/images/grid-icon-4.png)  no-repeat center center #ff9ba0;
		background-size: 70%;
	}
	.bg5{
		background: url(../../assets/images/grid-icon-5.png)  no-repeat center center #cc9999;
		background-size: 70%;
	}
	.bg6{
		background: url(../../assets/images/grid-icon-6.png)  no-repeat center center #ff7799;
		background-size: 70%;
	}
	.bg7{
		background: url(../../assets/images/grid-icon-7.png)  no-repeat center center #99cc99;
		background-size: 70%;
	}
	.bg8{
		background: url(../../assets/images/grid-icon-8.png)  no-repeat center center #c2c2c2;
		background-size: 70%;
	}
	
	
</style>