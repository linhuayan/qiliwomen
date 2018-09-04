<template>
	<div class="ongoing">
		<ul>
			<li class="t-list" v-for="v in list">
				<img :src="v.pic"/>
				<p class="p-wrap">
				   <h2 class="tl-title">{{v.title}}</h2>
				   <span class="try-number">试用份数：<i>{{v.try}}</i>份</span>
				   <span class="try-number">人气：<i>{{v.like}}</i>人</span>
				   <span class="try-number">距结束：<i>{{v.deadline}}</i></span>
				</p>
			</li>
		</ul>
		<div class="to-bottom">
			已经到底了！
		</div>
	</div>  
</template>

<script>
	export default{
			data(){
			return{
				list:[]
			}
		},
		mounted(){
			var a=this;
			this.$axios.get('try-list.json')
			.then(function(res){
				console.log(res);
				a.list=res.data.list;
//				console.log(JSON.parse(response.data));
			})
			.catch(function(error){
				console.log(error);
			})
		}
	}

</script>

<style scoped="scoped">
	.ongoing{
		width: 100%;
		background:#fff;
		
	}
	.t-list{
		width: 100%;
		/*border-bottom: 2px solid #dadadd;*/
		/*margin-bottom: 1rem;*/
	}
	.t-list img{
		width: 100%;
	}
	.p-wrap{
		background: #fff;
		margin: 0;
		padding: 0;
	}
	.tl-title{
		font-size: 1.4rem;
		width: 100%;
		background: #fff;
		margin: 0;
		color: #333333;
		padding-left: 1rem;
		padding-top:1.3rem;
	}
	.try-number{
		display: inline-block;
		color: #333;
		font-size: 1.2rem;
		padding-left: 1rem;
		padding-top: 2.2rem;
	}
	i{
		color: #ff7e99;
		font-style: normal;
	}
	.to-bottom{
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		border-radius: 10px;
		font-size: 1.2rem;
		color: #b7b8b7;
		border: 2px solid #999999;
		
	}
</style>