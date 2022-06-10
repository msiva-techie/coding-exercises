const getMinVertex = (distance, visited) => {
	let minValue = Number.MAX_VALUE;
	let minIndex = 0;
	// console.log({ distance, visited, minValue });
	for (let i = 0; i < distance.length; i++) {
		if (!visited[i] && distance[i] < minValue) {
			minValue = distance[i];
			minIndex = i;
		}
	}
	return minIndex;
};

const prims = (graph, sourceNode) => {
	const visited = Array(graph.length).fill(false);
	const parent = Array(graph.length).fill(-1);
	let distance = Array(graph.length).fill(Number.MAX_VALUE);
	distance[sourceNode] = 0;
	for (let i = 0; i < graph.length - 1; i++) {
		let currentNode = getMinVertex(distance, visited);
		visited[currentNode] = true;
		for (let i = 0; i < graph.length; i++) {
			if (
				!visited[i] &&
				graph[currentNode][i] !== 0 &&
				distance[i] > graph[currentNode][i]
			) {
				distance[i] = graph[currentNode][i];
				parent[i] = currentNode;
			}
		}
	}
	return [parent, distance];
};

let graph = [
	[0, 4, 0, 0, 0, 0, 0, 8, 0],
	[4, 0, 8, 0, 0, 0, 0, 11, 0],
	[0, 8, 0, 7, 0, 4, 0, 0, 2],
	[0, 0, 7, 0, 9, 14, 0, 0, 0],
	[0, 0, 0, 9, 0, 10, 0, 0, 0],
	[0, 0, 4, 14, 10, 0, 2, 0, 0],
	[0, 0, 0, 0, 0, 2, 0, 1, 6],
	[8, 11, 0, 0, 0, 0, 1, 0, 7],
	[0, 0, 2, 0, 0, 0, 6, 7, 0]
];

const printGraph = graph => {
	for (let i = 0; i < graph.length; i++) {
		let children = [];
		for (let j = 0; j < graph[i].length; j++) {
			if (graph[i][j] !== 0) {
				children.push(`${j} (${graph[i][j]})`);
			}
		}
		console.log(`${i} => ${children}`);
	}
};

printGraph(graph);

const result = prims(graph, 0);

console.log(result);

for (let i = 0; i < result[0].length; i++) {
	console.log(`${i}=>${result[0][i]}(${result[1][i]})`);
}
