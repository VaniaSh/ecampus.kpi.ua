<template>
	<div class="wrap" @wheel.prevent="zoomWheel">
		<div class="group-button">
			<v-col class="flex">
				<v-btn class="mx-2" icon fab @click="zoomIn">
					<v-icon large dark> mdi-magnify-plus-outline </v-icon>
				</v-btn>

				<v-btn class="mx-2" icon fab @click="zoomOut">
					<v-icon large dark> mdi-magnify-minus-outline </v-icon>
				</v-btn>
			</v-col>

			<v-col class="tool-button d-flex justify-end mx-16">

				<v-btn
									class="white--text mx-3"
									color="green darken-1"
									depressed
									large
									@click="downloadJson(tree)"
								>
								Save
									<v-icon right> mdi-content-save </v-icon>
								</v-btn>

				<v-btn
					class="mx-2"
					fab
					x-small
					color="white"
					@click="resetTree()"
				>
					<v-icon color="black" dark> mdi-restore </v-icon>
				</v-btn>
			</v-col>

			<!-- <v-btn class="mx-2" icon fab @click="restore">
				<v-icon color="black" large dark> mdi-restore </v-icon>
			</v-btn> -->
		</div>
		<keep-alive>
			<vue-tree
				style="width: 80vw; height: 90vh"
				:dataset="tree"
				:config="treeConfig"
				linkStyle="straight"
				direction="vertical"
				:collapse-enabled="true"
				ref="tree"
				:key="treeConfig.forceUpdateKey"
			>
				<!-- Отдельный компонент для template -->
				<template v-slot:node="{ node, collapsed }">
					<v-card
						class="mx-6"
						min-width="400"
						outlined
						shaped
						:color="`${
							node.children
								? node.children.length
									? 'grey lighten-4'
									: ''
								: 'grey lighten-4'
						}`"
						:style="{ border: collapsed ? '2px solid grey' : '' }"
					>
						<v-list-item three-line class="body-card">
							<v-list-item-content>
								<v-list-item-title
									class="head-textarea text-h1 mb-1"
								>
									<v-textarea
										clear-icon="mdi-close-circle"
										spellcheck="false"
										no-resize
										auto-grow
										rows="1"
										v-model="node.name"
										@click.stop=""
										@mousedown.stop=""
										style="
											font-size: 65px;
											font-weight: bold;
										"
									></v-textarea>
								</v-list-item-title>
								<v-list-item-subtitle class="body-textarea m-1">
									<v-textarea
										no-resize
										auto-grow
										spellcheck="false"
										rows="3"
										@click.stop=""
										@mousedown.stop=""
										style="font-size: 30px"
										v-model="node.description"
									></v-textarea>
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-card-actions>
							<v-spacer></v-spacer>

							<v-btn
								@click.stop="deleteNode(tree, node.id)"
								dark
								text
								color="error"
								rounded
							>
								<v-icon large dark>mdi-minus</v-icon>
							</v-btn>

							<v-btn
								@click.stop="addNode(node)"
								dark
								text
								color="success"
								large
								class="rounded-plus"
							>
								<v-icon x-large>mdi-plus</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</vue-tree>
		</keep-alive>
	</div>
</template>
<script>
import { mapActions } from "vuex";
import { deleteNode, getDefaultNode } from "@/util/recurTree";
export default {
	name: "treemap",

	data() {
		return {
			tree: {},
			refTree: "",
			defaultTree: {},
			currentScale: 1,
			treeConfig: {
				nodeWidth: 600,
				nodeHeight: 400,
				levelHeight: 1200,
				forceUpdateKey: 0,
			},
			loading: false,
		};
	},

	created: function () {
		this.getTree().then((tree) => {
			this.tree = tree;
			this.defaultTree = JSON.parse(JSON.stringify(tree));
			this.treeConfig.forceUpdateKey += 1;

			this.$nextTick(() => {
				this.restore();
			});
			this.restore();
		});
	},

	methods: {
		...mapActions(["getTree", "saveTree",'downloadJson']),
		zoomOut: function () {
			this.$refs.tree.zoomOut();
			this.currentScale = this.$refs.tree.currentScale;
		},
		zoomIn: function () {
			this.$refs.tree.zoomIn();
			this.currentScale = this.$refs.tree.currentScale;
		},
		restore: function () {
			this.$refs.tree.setScale(0.2);
			this.currentScale = 0.2;
		},

		zoomWheel: function (e) {
			return e.deltaY > 0 ? this.zoomOut() : this.zoomIn();
		},

		addNode(node) {
			node.children.push(
				this.$refs.tree.addUniqueKey(getDefaultNode(this.tree))
			);
			this.$refs.tree.draw();
		},

		deleteNode(tree, id) {
			this.tree = deleteNode(tree, id);
			this.$refs.tree.draw();
		},

	
		resetTree: function () {
			this.tree = JSON.parse(JSON.stringify(this.defaultTree));
			this.$refs.tree.draw();
			this.treeConfig.forceUpdateKey += 1;

			this.$nextTick(() => {
				this.restore();
			});
			this.restore();
		},
	},
};
</script>


<style lang="scss">
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

.rounded-plus {
	border-radius: 10px 1px 10px 1px;
}

.tool-button {
	align-self: end;
}
.group-button {
	display: flex;
	justify-content: space-between;
	position: absolute;
	margin: 35px;
	z-index: 2;
	width: 100%;
}
.body-textarea .v-textarea textarea {
	line-height: 60px !important;
	font-family: "Lucida Sans Unicode", sans-serif;
}

.head-textarea .v-textarea textarea {
	line-height: 60px !important;
	font-family: "Сomic Sans MS", cursive;
}
.wrap {
	margin: 5px 30px auto;
	position: relative;
}
</style>