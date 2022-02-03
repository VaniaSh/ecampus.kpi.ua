const getIncId = (tree) => {
	let max = 0;
	function recurSearch(nodes) {
		for (let node of nodes) {
			if (node.id > max) {
				max = node.id;
			}
			if (node.children?.length) {
				recurSearch(node.children);
			}
		}
	}
	recurSearch(tree);
	return max + 1;
};

const deleteNode = (tree, id) => {
	const copyTree = JSON.parse(JSON.stringify(tree));

	function recurSearch(nodes) {
		nodes.children = nodes.children?.filter((childNode) => {
			if (childNode.children?.length) {
				recurSearch(childNode);
			}
			return childNode.id !== id;
		});
	}
	recurSearch(copyTree);
	return copyTree;
};

const getDefaultNode = (tree) => {
	const nodeId = getIncId(tree.children);
	return {
		id: nodeId,
		name: `Заголовок ${nodeId}`,
		description: "",
		attachments: [],
		children: [],
	};
};

const getNodeById = (tree,id) => {
	let findedNode = null;
	function recurSearch(nodes) {
		return nodes.children?.find((node)=>{
			if(node.id == id){
				findedNode = node;
			}
			recurSearch(node);
		});
	}

	recurSearch(tree);
	return findedNode;
};

export {getDefaultNode,deleteNode, getNodeById}