import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Home',
		path: '/home',
		component: () => import('../pages/Home/index.vue')
	},
    // 异常捕获
	{
		path: '/:pathMatch(.*)',
		component: () => import("../pages/exception/404.vue"),
		meta: {
			title: '未找到页面',
			hidden: true
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// 始终滚动到顶部
		return { top: 0, left:0 }
	},
})

export default router