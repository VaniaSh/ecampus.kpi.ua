import Vue from 'vue';
import Login from '../views/Login.vue';
import store from "../store";
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { isAuth: true },
		// meta: { requiresAuth: true },
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



// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		if (store.getters.isAuthenticated) {
// 			next();
// 			return;
// 		}
// 		next("/login");
// 	} else {
// 		next();
// 	}

// 	if (to.matched.some((record) => record.meta.isAuth)) {
// 		if (store.getters.isAuthenticated) {
// 			return router.push({ name: 'TreeView' }).catch(() => { });
// 		}
// 		next();
// 	}

// });



export default router
