const { Graph, GraphNode } = require("./index");

const obj = {};

const cloneGraphHelper = node => {
	if (obj[node.value]) {
		return obj[node.value];
	}

	const newNode = new GraphNode(node.value);
	obj[node.value] = newNode;

	for (let n of node.neighbours) {
		newNode.neighbours.push(cloneGraphHelper(n));
	}
	return newNode;
};

const cloneGraph = (graph, obj = {}) => {
	const newNodes = [];
	for (let node of graph.nodes) {
		const newNode = cloneGraphHelper(node);
		newNodes.push(newNode);
	}
	return new Graph(newNodes);
};

const graph = new Graph();

const n1 = graph.addVertex(1);
const n2 = graph.addVertex(2);
graph.addEdge(n1, n2);

const n3 = graph.addVertex(3);
const n4 = graph.addVertex(4);
graph.addEdge(n3, n4);

graph.addEdge(n1, n3);
graph.addEdge(n2, n4);

graph.printGraph();

console.log("---------------------------");

newGraph = cloneGraph(graph);
newGraph.printGraph();
