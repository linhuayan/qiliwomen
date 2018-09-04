<template>
	<div class="t-section">
		<div class="t-header">
			<router-link to="/index"><span class="home"></span></router-link>
			<span class="logo">
				<img src="../../assets/images/tryOn/login_logo.png"/>
				<i></i>
				<span class="text">试用</span>
			</span>
			<router-link to="/mine"><span class="right"></span></router-link>
		</div>
		<div class="content">
			<div class="t-nav">
				<router-link class="current" to="/ongoing">进行中</router-link>
				<router-link class="" to="">已结束</router-link>
				<router-link class="" to="/mine">我的</router-link>
			</div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.t-section{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 20;
	}
	.t-header{
		height: 4.4rem;
		width: 100%;
		border-bottom: 1px solid #e2e2e2;
		text-align: center;
		overflow: hidden;
	}
	.home{
		float: left;
		width: 50px;
    	height: 100%;
		background: url(../../assets/images/tryOn/icon_index.png) no-repeat center center;
		background-size: 1.8rem;	
	}
	.logo{	
		font-size: 1.8rem;
		display: inline-block;
		color: #333333;
		line-height: 4.4rem;
	}
	img{
		width: 9rem;
		vertical-align:middle;
	}
	i{
	    display: inline-block;
	    width: 0.5rem;
	    height: 0.5rem;
	    border-radius: 50%;
	    background: #333333;
	    margin: 4px -1px;
		
	}
	/*.text{
		margin-top:10px;
		display: inline-block;
	}*/
	.right{
		float: right;
		width: 3rem;
		height: 100%;
		margin-right: 10px;
		background: url(../../assets/images/tryOn/icon_user.png) no-repeat center center;
		background-size: 70%;
	}
	.t-nav{
		border-bottom: 1px solid #e2e2e2;
		
	}
	.t-nav a{
		display: inline-block;
		color: #999999;
		width: 14%;
		margin: auto calc(52% / 6);
		font-size: 1.2rem;
		text-align: center;
		height: 100%;
		padding-top: 15px;
		padding-bottom: 15px;
	}
	a.current{
		border-bottom: 2px solid #ff6699;
		color: #333333;
		font-weight: bold;
	}
</style>