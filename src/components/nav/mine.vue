<template>
	<div class="mine">
		<div class="mine-top">
			<router-link to="/tryOn"><span class="back-try"></span></router-link>
		</div>
		<div class="mine-login">
			<span class="mine-logo"></span>
			<ul>
				<li class="mine-li"><input class="mobile-number" type="text" value="手机号码"/></li>
				<li class="mine-li"><input class="mobile-number" type="text" name="" id="" value="密码" /></li>
			</ul>
			<button class="login-button">登录</button>
			<button class="register-button">注册</button>
			<p class="forget">忘记密码？</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mine{
		position: absolute;
		top:0;
		left: 0;
		background: url(../../assets/images/mine/bg_1_enter.jpg) no-repeat top right,url(../../assets/images/mine/bg_2_enter.jpg) no-repeat bottom left;
		background-size: 30%;
		background-color: #fff;
		width: 100%;
		height: 100%;
	}
	.mine-top{
		height: 4rem;
	}
	.back-try::before{
		position: absolute;
		top:20px;
		left:12px;
		width: 0;
		height: 0;
		content: "";
		border: 8px solid transparent;
		border-right: 8px solid #333;
		display: inline-block;
	}
	.back-try::after{
		position: absolute;
		top:20px;
		left:14px;
		width: 0;
		height: 0;
		content: "";
		border: 8px solid transparent;
		border-right: 8px solid #fff;
		display: inline-block;
	}
	.mine-login{
		width: 100%;
		text-align: center;
		padding: 2rem;
	}
	.mine-logo{
		background: url(../../assets/images/tryOn/login_logo.png) no-repeat center center;
		display: inline-block;
		height: 3.1rem;
    	width: 12.8rem;
    	background-size: 100%;
	}
	.mine-li{
		margin-top: 3rem;
	}
	.mobile-number{
		outline: none;
		border: none;
		border-bottom: 1px solid #d2d2d2;
		color: #757575;
		background: transparent;
		
	}
	.login-button{
		margin-top:2.5rem;
		height: 4rem;
		width: 98%;
		outline: none;
		border: none;
		border-radius: 100px;
		font-size: 1.5rem;
		background: #ff2c63;
		color: #fff;
		
	}
	.register-button{
		margin-top:1.5rem;
		height: 4rem;
		width: 98%;
		outline: none;
		border: 1px solid #FF2C63;
		border-radius: 100px;
		font-size: 1.5rem;
		background:#fff ;
		color: #ff2c63;
	}
	.forget{
		margin-top: 2rem;
		font-size: 1.5rem;
	}
</style>