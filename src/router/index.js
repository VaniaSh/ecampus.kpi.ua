import Vue from 'vue';
import VueRouter from 'vue-router';
import TreeView from '../views/TreeView.vue';
import FolderTree from '../views/FolderTree.vue';
import Login from '../views/Login.vue';
import store from "../store";

Vue.use(VueRouter)

const routes = [
	{
		path: '/tree',
		name: 'TreeView',
		component: TreeView,
		meta: { requiresAuth: true },
	},
	{
		path: '/folder-tree',
		name: 'FolderTree',
		component: FolderTree,
		meta: { requiresAuth: true },
	},

	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { isAuth: true },
	},
	//   {
	//     path: '/about',
	//     name: 'About',
	//     // route level code-splitting
	//     // this generates a separate chunk (about.[hash].js) for this route
	//     // which is lazy-loaded when the route is visited.
	//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//   }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});



router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isAuthenticated) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}

	if (to.matched.some((record) => record.meta.isAuth)) {
		if (store.getters.isAuthenticated) {
			return router.push({ name: 'TreeView' }).catch(() => { });
		}
		next();
	}

});



export default router
