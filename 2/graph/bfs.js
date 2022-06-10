const { Graph, GraphNode } = require("./index");

const obj = {};

const bfs = graph => {
	const nodes = graph.nodes;
	const arr = [];
	const result = [];
	if (nodes.length > 0) {
		arr.push(nodes[0]);
		while (arr.length > 0) {
			let cur = arr.shift();
			result.push(cur.value);
			obj[cur.value] = true;
			for (let neighbour of cur.neighbours) {
				if (!obj[neighbour.value]) {
					arr.push(neighbour);
					obj[neighbour.value] = true;
				}
			}
		}
	}
	return result;
};

const graph = new Graph();

const n1 = graph.addVertex(1);
const n0 = graph.addVertex(0);
const n2 = graph.addVertex(2);
graph.addEdge(n1, n2);
graph.addEdge(n1, n0);

const n3 = graph.addVertex(3);
const n4 = graph.addVertex(4);
graph.addEdge(n3, n4);

graph.addEdge(n1, n3);
graph.addEdge(n2, n4);

graph.printGraph();

console.log("---------------------------");

console.log(bfs(graph));
