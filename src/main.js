import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTree from '@ssthouse/vue-tree-chart'
import axios from 'axios';


// remove to constructor
const user = store.state.auth.user;
if (user && user?.accessToken) {
	axios.defaults.headers.common['x-access-token'] = user.accessToken;
}


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3002/';


axios.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		if (error) {
			const originalRequest = error.config;
			if ((error.response.status === 401 || error.response.status === 400) && !originalRequest._retry) {
				console.log(error.response, originalRequest, "error");
				originalRequest._retry = true;

				store.dispatch('AUTH_LOGOUT');
				router.push('/login');
			}
			console.log(error.response, " - error");

			return Promise.reject(error);
		}
});
// remove to constructor

Vue.component('vue-tree', VueTree);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
