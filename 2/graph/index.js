class GraphNode {
	constructor(value) {
		this.value = value;
		this.neighbours = [];
	}
}

class Graph {
	constructor(nodes = []) {
		this.nodes = nodes;
	}

	addVertex(value) {
		const node = new GraphNode(value);
		this.nodes.push(node);
		return node;
	}

	adddirectionalEdge(sourceNode, destinationNode) {
		sourceNode.neighbours.push(destinationNode);
	}

	addEdge(sourceNode, destinationNode) {
		sourceNode.neighbours.push(destinationNode);
		destinationNode.neighbours.push(sourceNode);
	}

	printGraph() {
		for (let node of this.nodes) {
			console.log(
				`${node.value} =>`,
				`${
					node.neighbours.length > 0
						? node.neighbours.map(n => n.value).join(", ")
						: null
				}`
			);
		}
	}
}

module.exports = {
	GraphNode,
	Graph
};
