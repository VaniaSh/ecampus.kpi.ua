<template>
	<div v-if="Object.keys(tree).length">
		<v-card>
			<v-sheet class="pa-4 primary lighten-2">
				<v-text-field
					v-model="search"
					label="Пошук по заголовку..."
					dark
					flat
					solo-inverted
					hide-details
					clearable
					clear-icon="mdi-close-circle-outline"
				></v-text-field>
				<v-checkbox
					v-model="caseSensitive"
					dark
					hide-details
					label="Враховувати регістр?"
				></v-checkbox>
			</v-sheet>
			<v-row class="pa-4" justify="space-between">
				<v-col cols="5">
					<v-treeview
						:active.sync="active"
						:items="[tree]"
						:search="search"
						:filter="filter"
						:open="open"
						open-on-click
						transition
						activatable
					>
						<template v-slot:prepend="{ item }" class="relative">
							<v-icon>
								{{
									`mdi-${
										item.id === 0
											? "home-variant"
											: item.children.length > 0
											? "folder-network"
											: "import"
									}`
								}}
							</v-icon>
						</template>

						<template v-slot:label="{ item }">
							<v-hover v-slot="{ hover }">
								<div class="item-node">
								<span class="item-text">
									{{ item.name }}
								</span>

								<div v-if="hover">
									<v-btn
										v-for="(icon, index) in icons"
										:key="index"
										:class="{ 'show-btns': hover }"
										icon
									>
										<v-icon
											:class="{ 'show-btns': hover }"
											:color="icon.color"
										>
											{{ icon.icon }}
										</v-icon>
									</v-btn>
								</div>
								{{item.id}}
								</div>
							</v-hover>
						</template>
					</v-treeview>
				</v-col>

				<v-divider vertical></v-divider>

				<v-col class="d-flex text-center">
					<v-scroll-y-transition mode="out-in">
						<div
							v-if="!selected"
							class="
								title
								grey--text
								text--lighten-1
								font-weight-light
							"
							style="align-self: center"
						>
							Select a User
						</div>
						<v-card
							v-else
							:key="selected.id"
							class="pt-6 mx-auto"
							flat
							max-width="400"
						>
							{{ selected }}
							<!-- <v-card-text>
								<h3 class="headline mb-2">
									{{ selected.a }}
								</h3>
								<div class="blue--text mb-2">
									{{ selected.email }}
								</div>
								<div
									class="
										blue--text
										subheading
										font-weight-bold
									"
								>
									{{ selected.username }}
								</div>
							</v-card-text> -->
							<v-divider></v-divider>
							<!-- <v-row class="text-left" tag="v-card-text">
								<v-col
									class="text-right mr-4 mb-2"
									tag="strong"
									cols="5"
									>Company:</v-col
								>
								<v-col>{{ selected.company.name }}</v-col>
								<v-col
									class="text-right mr-4 mb-2"
									tag="strong"
									cols="5"
									>Website:</v-col
								>
								<v-col>
									<a
										:href="`//${selected.website}`"
										target="_blank"
										>{{ selected.website }}</a
									>
								</v-col>
								<v-col
									class="text-right mr-4 mb-2"
									tag="strong"
									cols="5"
									>Phone:</v-col
								>
								<v-col>{{ selected.phone }}</v-col>
							</v-row> -->
						</v-card>
					</v-scroll-y-transition>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>

<script>
import { getNodeById } from "@/util/recurTree";

export default {
	props: {
		tree: {
			type: Object,
			required: true,
		},
		defaultTree: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		active: [],
		avatar: null,
		open: [],
		users: [],
		search: null,
		caseSensitive: false,
		icons: [{icon:"mdi-source-branch-plus",color:'success'},{icon:"mdi-trash-can",color:'red'}],
	}),
	computed: {
		filter() {
			return this.caseSensitive
				? (item, search, textKey) => item[textKey].indexOf(search) > -1
				: undefined;
		},
		selected() {
			if (!this.active.length) return undefined;

			const [id] = this.active;
			return getNodeById(this.tree, id);
		},
	},
};
</script>

<style lang="scss" scoped>
// .card-tree{
// 	position: absolute;
// 	z-index: 2;
// 	left: 65%;
// }

.item-node {
	display:flex;
	align-items: center;
}

.item-text{
    flex-grow: 1;
}


</style>