<template>
	<v-app id="inspire" v-if="isAuthenticated">
		<v-app id="inspire">
			<Header />
			<v-main>
					<router-view />
			</v-main>
		<Dialog />
		</v-app>
	</v-app>
	<div v-else>
	<Login />
	</div>
</template>

<script>
import Dialog from '@/components/Dialog';
import Header from '@/components/Header';

import Login from '@/views/Login';

import { mapGetters } from 'vuex';

export default {
	name: "App",
	components:{
		Dialog,
		Header,
		Login,
	},

	computed: {
    ...mapGetters([
      'isAuthenticated',
    ])
  }

};
</script>


<style lang="scss">
a{
	text-decoration: none;
}
</style>
