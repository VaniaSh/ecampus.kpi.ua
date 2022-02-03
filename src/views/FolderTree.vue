<template>
	<div v-if="Object.keys(tree).length">
		<v-card>
			<v-row>
				<v-col class="pa-0">
					<v-sheet class="pa-6 primary lighten-2">
						<v-text-field
							v-model="search"
							label="По заголовку..."
							:append-icon="
								caseSensitive
									? 'mdi-alphabetical-variant'
									: 'mdi-alphabetical-off'
							"
							@click:append="caseSensitive = !caseSensitive"
							dark
							flat
							solo-inverted
							hide-details
							clearable
							clear-icon="mdi-close-circle-outline"
						></v-text-field>
					</v-sheet>
				</v-col>
				<v-col class="pa-0">
					<v-sheet class="pa-6 primary lighten-2" height="100%">
						<v-text-field
							v-model="search"
							label="По id..."
							dark
							flat
							solo-inverted
							hide-details
							clearable
							clear-icon="mdi-close-circle-outline"
						></v-text-field>
					</v-sheet>
				</v-col>
			</v-row>

			<v-row class="py-4 px-1" justify="space-between">
				<v-col xs="12" sm="12" cols="12" md="5">
					<v-treeview
						:active.sync="active"
						:items="[tree]"
						:search="search"
						:filter="filter"
						:open="open"
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
								<div class="item-node w-40">
									<span class="item-text text-truncate">
										{{ item.name }}
									</span>

									<div v-if="hover || item.id == (selected?selected.id:false)">
										<v-btn
											v-for="(icon, index) in icons"
											:key="index"
											:class="{ 'show-btns': hover }"
											icon
										>
											<v-icon
												:class="{ 'show-btns': hover }"
												:color="icon.color"
												@click.stop="icon.handler(item)"
											>
												{{ icon.icon }}
											</v-icon>
										</v-btn>
									</div>
									{{ item.id }}
								</div>
							</v-hover>
						</template>
					</v-treeview>

					<v-card-actions class="my-3">
						<v-btn
							class="mx-2"
							fab
							x-small
							color="white"
							@click="resetTree()"
						>
							<v-icon color="black" dark> mdi-restore </v-icon>
						</v-btn>

						<v-spacer></v-spacer>

						<v-btn
							class="white--text"
							color="green darken-1"
							depressed
							@click="downloadJson(tree)"
						>
							Save
							<v-icon right> mdi-content-save </v-icon>
						</v-btn>
					</v-card-actions>
				</v-col>

				<v-divider vertical></v-divider>

				<v-col class="d-flex text-center justify-center">
					<v-scroll-y-transition mode="out-in">
						<div
							v-if="!selected"
							class="
								title
								grey--text
								text--lighten-1
								font-weight-light
							"
						>
							Виберiть текстовий вузол
						</div>
						<v-card
							v-else
							:key="selected.id"
							class="pt-6 mx-auto"
							flat
							min-width="300"
							width="60%"
						>
							<v-textarea
								name="input-7-4"
								label="Заголовок"
								v-model="selected.name"
								spellcheck="false"
								no-resize
								auto-grow
								rows="1"
							></v-textarea>

							<v-textarea
								name="input-7-4"
								label="Опис"
								v-model="selected.description"
								spellcheck="false"
								no-resize
								auto-grow
								rows="1"
							></v-textarea>
						</v-card>
					</v-scroll-y-transition>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>

<script>
/* eslint-disable */
import { deleteNode, getDefaultNode } from "@/util/recurTree";
import { getNodeById } from "@/util/recurTree";

import { mapActions } from "vuex";
export default {
	created: function () {
		this.getTree().then((tree) => {
			this.tree = tree;
			this.defaultTree = JSON.parse(JSON.stringify(tree));
		});
	},

	data: function () {
		return {
			active: [],
			avatar: null,
			open: [0],
			users: [],
			search: null,
			tree: {},
			defaultTree: {},
			caseSensitive: false,
			icons: [
				{
					icon: "mdi-source-branch-plus",
					color: "success",
					handler: this.appendChild,
				},
				{
					icon: "mdi-trash-can",
					color: "red",
					handler: this.deleteChild,
				},
			],
		};
	},
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

	methods: {
		...mapActions(["getTree", "saveTree", "downloadJson"]),
		appendChild: function (item) {
			item.children.push(getDefaultNode(this.tree));
		},

		deleteChild: function (item) {
			this.tree = deleteNode(this.tree, item.id);
		},
		resetTree: function () {
			this.tree = JSON.parse(JSON.stringify(this.defaultTree));
		},
	},
};
</script>

<style lang="scss" scoped>
.item-node:hover {
	cursor: help;
}
.item-node {
	display: flex;
	align-items: center;
}

.item-text {
	flex-grow: 1;
}
</style>