<template>
	<div>
		<v-app-bar
			:clipped-left="$vuetify.breakpoint.lgAndUp"
			app
			color="blue darken-3"
			dark
		>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title style="width: 300px" class="ml-0 pl-4">
				<span class="hidden-sm-and-down">Панель адміністратор </span>
			</v-toolbar-title>
			<v-text-field
				flat
				solo-inverted
				hide-details
				prepend-inner-icon="mdi-magnify"
				label="Глобальний пошук..."
				class="hidden-sm-and-down"
			></v-text-field>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-apps</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-bell</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			:clipped="$vuetify.breakpoint.lgAndUp"
			app
		>
			<v-list dense>
				<template v-for="item in items">
					<v-row
						v-if="item.heading"
						:key="item.heading"
						align="center"
					>
						<v-col cols="6">
							<v-subheader v-if="item.heading">
								{{ item.heading }}
							</v-subheader>
						</v-col>
						<v-col cols="6" class="text-center">
							<a href="#!" class="body-2 black--text">Редагувати</a>
						</v-col>
					</v-row>
					<v-list-group
						v-else-if="item.children"
						:key="item.text"
						v-model="item.model"
						:prepend-icon="
							item.model ? item.icon : item['icon-alt']
						"
						append-icon=""
					>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>
									{{ item.text }}
								</v-list-item-title>
							</v-list-item-content>
						</template>
						<v-list-item
							v-for="(child, i) in item.children"
							:key="i"
							link
							:to="child.link"
						>
							<v-list-item-action v-if="child.icon">
								<v-icon>{{ child.icon }}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>
									{{ child.text }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>
					<v-list-item v-else :key="item.text" link :to="item.link">
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>
								{{ item.text }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>

import { mapGetters } from 'vuex';


export default {
	data: function () {
		return {
			drawer: null,
			items: [
				{ icon: "mdi-account", text: "Профiль", link: "/profile" },
				{ icon: "mdi-history", text: "Iсторiя", link: "/history" },
				{
					icon: "mdi-chevron-down",
					"icon-alt": "mdi-telegram",
					text: "Телеграм повiдомлення",
					model: false,
					children: [
						{
							icon: "mdi-folder-network-outline",
							text: "Дерево папок",
							link: "/folder-tree",
						},
						{
							icon: "mdi-family-tree",
							text: "Дерево",
							link: "/tree",
						},
					],
				},
				//   { icon: 'mdi-cog', text: 'Settings' },
				//   { icon: 'mdi-message', text: 'Send feedback' },
				//   { icon: 'mdi-help-circle', text: 'Help' },
				//   { icon: 'mdi-cellphone-link', text: 'App downloads' },
				//   { icon: 'mdi-keyboard', text: 'Go to the old version' },
			],
		};
	},

	computed: {
    ...mapGetters([
      'isAuthenticated',
    ])
  }

};
</script>

<style>
</style>