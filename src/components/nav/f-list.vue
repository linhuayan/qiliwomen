<template>
	<div class="list">
		<h3 class="list-title"><b class="line"></b>编辑精选</h3>
		<ul class="list-con">
			<li class="list-li" v-for="v in list">
				<div class="list-term">
					<img :src="v.pic" alt="" />
					<div class="list-right">
						<p>{{v.title}}</p>
						<ol>
							<li>{{v.depict}}</li>
							<li>{{v.time}}</li>
							<li class="last-li"><span class="r-span"><i class="vis"></i>{{v.like}}</span></li>
						</ol>
						
					</div>
				</div>
				
			</li>
			<li><p>已经到底了┓( ´∀` )┏</p></li>
		</ul>
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
			this.$axios.get('f-list.json')
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
	.list-title{
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: #666666;
		position: relative;
		padding-left: 25px;
		font-size: 20px;
		background: #fff;
		margin: 0;
		border-top:1px #dadadd solid;

	}
	.line{
		display: block;
		height: 20px;
		width: 3px;
		position: absolute;
		top:15px;
		left: 10px;
		background: #FF7799;
	}
	.list-con{
		width: 100%;
		background: #fff;
		border-top:1px solid #e4e3e6;
		
	}
	.list-li{
		width: 100%;
		
	}
	.list-term{
		width: 100%;
		height: 110px;
		border-bottom: 1px solid #e4e3e6;
		
	}
	img{
		width: 85px;
		float: left;
		margin: 10px;
	}
	.list-right{
		display: inline-block;
		max-height: 110px;
		width: calc(100% - 105px);	
	}
	p{
		color: #222222;
		font-size: 16px;
		margin-top: 10px;
	}
	ol{
		margin-top: 50px;
	}
	ol>li{
		float: left;
		color: #c5c5c5;
		font-size: 12px;
		margin-right: 10px;
	}
	.last-li{
		float: right;
	}
	.r-span{
		
		color: #c5c5c5;
		font-size:12px;
		margin-right: 15px;
	}
	.vis{
		display: inline-block;
		width: 20px;
		height: 10px;
		background: url(../../assets/images/vis.png) no-repeat center center;
		background-size: 15px;
		margin-right: 10px;
	}
	
	
</style>