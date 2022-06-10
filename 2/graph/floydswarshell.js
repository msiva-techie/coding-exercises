const INF = 9999;

const floydWarshell = graph => {
	let dist = [];
	for (let i = 0; i < graph.length; i++) {
		dist[i] = [];
		for (let j = 0; j < graph[0].length; j++) {
			dist[i][j] = graph[i][j];
		}
	}
	for (let k = 0; k < graph.length; k++) {
		for (let i = 0; i < graph.length; i++) {
			for (let j = 0; j < graph[0].length; j++) {
				if (
					dist[i][k] !== INF &&
					dist[k][j] !== INF &&
					dist[i][k] + dist[k][j] < dist[i][j]
				) {
					dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
		}
	}

	for (let i = 0; i < graph.length; i++) {
		if (dist[i][i] < 0) {
			console.log("Identified negative weighted edge");
			return [[], []];
		}
	}

	return dist;
};

const graph = [
	[0, 5, INF, 10],
	[INF, 0, 3, INF],
	[INF, INF, 0, 1],
	[INF, INF, INF, 0]
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

const result = floydWarshell(graph, 0);

console.log(result);
