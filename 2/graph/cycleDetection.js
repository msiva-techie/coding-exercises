const { Graph, GraphNode } = require("./index");

let obj = {};

const PROCESSING = 1;
const DONE = 2;

const cycleDetectionHelper = node => {
	if (obj[node.value] === DONE) {
		return false;
	}
	if (obj[node.value] === PROCESSING) {
		return true;
	}
	obj[node.value] = PROCESSING;
	for (let neighbour of node.neighbours) {
		if (cycleDetectionHelper(neighbour)) {
			return true;
		}
		obj[neighbour.value] = DONE;
	}
	return false;
};

const cycleDetection = graph => {
	const nodes = graph.nodes;
	for (let node of nodes) {
		if (!cycleDetectionHelper(node)) {
			return false;
		}
	}
	return true;
};

const graph = new Graph();

const n1 = graph.addVertex(1);
const n2 = graph.addVertex(2);

const n3 = graph.addVertex(3);
const n4 = graph.addVertex(4);
graph.adddirectionalEdge(n1, n2);
graph.adddirectionalEdge(n2, n3);
graph.adddirectionalEdge(n2, n4);
graph.adddirectionalEdge(n3, n4);

graph.printGraph();

console.log("---------------------------");

console.log(cycleDetection(graph));
