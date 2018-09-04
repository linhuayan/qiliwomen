<template>
	
	<div class="section">
		<nav class="ul-wrap">
			<ul class="">
				<li class="nav-li"><router-link class="li-a current" to='/index'>首页</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to='/tryOn'>试用</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to='/fashion'>时尚</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to='/beauty'>护肤</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to='/makeUp'>彩妆</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>减肥</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>美发</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>医美</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>博主</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>街拍</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>星座</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>情感</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>健康</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>亲子</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>美甲</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>时装</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>优品</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>秀场</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>明星</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>大片</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>影视</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>家居</router-link></li>
			    <li class="nav-li"><router-link class="li-a" to=''>图库</router-link></li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
	
</template>

<script>
	
	export default{

		
	}
</script>

<style scoped="">
	.ul-wrap{
		position: fixed;
		z-index:5;
		top:44px;
		left: 0;
		width: 100%;
		overflow: hidden;
		height: 42px;
		background: #f8f8f8;
	}
	ul{
		width: 100%;
		height: 40px;
	}
	ul>li{
		float: left;
		
		
		
		
	}
	.li-a{
		color: #848484;
		font-size: 16px;
		text-decoration: none;
		padding:10px 13px;
		display: block;
	}
	.current{
		color: #ff7899;
		font-size: 18px;
	}
</style>