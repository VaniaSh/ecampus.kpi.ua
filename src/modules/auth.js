import axios from 'axios';
import router from '@/router';

const state = {
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
    userId: state => state.user?.id,
};

const actions = {
    async AUTH_LOGIN({commit}, User) {
		try{
			const res = await axios.post('/auth/login', User);
			console.log(res);
			
			await commit('SetUser', res.data);
			axios.defaults.headers.common['x-access-token'] = res.data.accessToken;
			router.push({ name: 'TreeView'});

			return true;
		} catch(e){
			console.log(e);
		}
      },
      
    async AUTH_LOGOUT({commit}){
        let user = null;
        commit('LogOut', user)
    },

    async AUTH_SETNAME({commit},username){
        commit('SetName', username)
    },

};
const mutations = {
    SetUser(state, user){
        state.user = user;
    },
    SetName(state,username){
        state.user.username = username;
    },
    LogOut(state){
        state.user = null;
        state.token = null;
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};

