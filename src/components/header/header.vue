<template>
	<div class="wrap">
		<header>
			<router-link to="/index">
				<h1 class="h1-title">
					<img class="logo" src="../../assets/images/logo.png"/>
				</h1>
			</router-link>
			
			<span class="search" @click="msg=!msg">
				<img class="search-img" src="../../assets/images/search.png"/>	
			</span>	
			<div class="input-s" v-show="!msg">
				<p class="input-wrap">
					<input class="input" type="text" value="输入您想要搜索的内容" />
					<span class="ss">搜索</span>
				</p>
			</div>
		</header>
		<router-view></router-view>
		
	</div>
</template>

<script>

	export default{

		data(){
			return{
				msg:'false'
			}
		}	
	}
</script>

<style scoped="scoped">
	header{
		position:fixed;
		top:0;
		left: 0;
		height: 44px;
		background: #ff7899;
		width: 100%;
		z-index: 5;
		text-align:center;
	}
	.h1-title{
		display: inline-block;
	}
	.logo{
		height: 30px;
		width: auto;
		margin: 0 auto;
		
	}
	.search{
		position: absolute;
		top:9px;
		right: 15px;
	}
	.search-img{
		width: 22px;
	}
	.input-s{
		background: #fff;
		height: 40px;
		text-align: center;
		transition: all 1s; 
		position: absolute;
		bottom: -40px;
		width: 100%;
		margin: 0;
		z-index: 10;
	}
	.input-wrap{
		margin: 0;
	}
	.input{
		width: 80%;
		outline: none;
		background-color: #fff;
		border: 1px solid #E2E2E2;
		border-radius: 20px;
		color: #979797;
		background: url(../../assets/images/search-red.png) no-repeat 5px 5px;
		background-size: auto 70%;
		height: 35px;
		padding: 0px 40px;
		margin: 0;
		
	}
	.ss{
		color: #ff7899;
	}
</style>