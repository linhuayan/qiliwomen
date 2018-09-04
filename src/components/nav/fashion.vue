<template>
	<div class="f-section">
		
		<v-fSlide></v-fSlide>
		<v-fList></v-fList>
	</div>
</template>

<script>
	import vfSlide from './f-slide.vue'
	import vfList from './f-list.vue'
	export default{
		components:{
			'v-fSlide':vfSlide,
			'v-fList':vfList
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

<style>
</style>