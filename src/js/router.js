import vueRouter from 'vue-router'

import header from '../components/header/header.vue'
import nav from '../components/header/nav.vue'
import index from '../components/nav/index.vue'
import fashion from '../components/nav/fashion.vue'
import beauty from '../components/nav/beauty.vue'
import makeUp from '../components/nav/makeUp.vue'
import tryOn from '../components/nav/tryOn.vue'
import ongoing from '../components/nav/ongoing.vue'
import mine from '../components/nav/mine.vue'


export default new vueRouter({
	routes:[
		{
			path:'/nav',
			component:nav,
			children:[
				{
					path:'/index',
					component:index
				},
				{
					path:'/fashion',
					component:fashion
				},
				{
					path:'/beauty',
					component:beauty
				},
				{
					path:'/makeUp',
					component:makeUp
				},
				{
					path:'/tryOn',
					component:tryOn,
					children:[
						{
							path:'/ongoing',
							component:ongoing
						},
						{
							path:'/mine',
							component:mine
						},
						{
							path:'/',
							redirect:'/ongoing'
						}
					]
				}
				
			]
		},
		{
			path:'/',
			redirect:'/index'
		}
	]
	
})
