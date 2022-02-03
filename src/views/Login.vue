<template>

<v-app id="inspire">
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
		<v-row align="center" justify="center" align-content="center">
			<v-col cols="12" sm="8" md="4">
				<v-card class="elevation-12">
					<v-toolbar color="primary" dark flat>
						<v-toolbar-title>Авторизація </v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field
								label="Login"
								name="login"
								v-model="form.login"
								prepend-icon="mdi-account"
								type="text"
							></v-text-field>

							<v-text-field
								id="password"
								v-model="form.password"
								label="Password"
								name="password"
								prepend-icon="mdi-lock"
								type="password"
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" @click="submit">Увiйти</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
    </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "Login",
	data() {
		return {
			form: {
				login: "",
				password: "",
			},
		};
	},
	methods: {
		...mapActions(["AUTH_LOGIN"]),
		async submit() {
			try {
				await this.AUTH_LOGIN(this.form);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
</style>