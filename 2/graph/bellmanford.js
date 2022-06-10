const INF = 9999;
const bellmanford = (source, numberOfVertices, edgeList) => {
	const parent = Array(numberOfVertices).fill(-1);
	const distance = Array(numberOfVertices).fill(INF);
	distance[source] = 0;
	let update = true;
	for (let i = 0; i < numberOfVertices - 1 && update; i++) {
		update = false;
		for (let e = 0; e < edgeList.length; e++) {
			const { u, v, w } = edgeList[e];
			if (distance[u] !== INF && distance[u] + w < distance[v]) {
				distance[v] = distance[u] + w;
				parent[v] = u;
				update = true;
			}
		}
	}

	for (let i = 0; i < numberOfVertices - 1 && update; i++) {
		for (let e = 0; e < edgeList.length; e++) {
			const { u, v, w } = edgeList[e];
			if (distance[u] !== INF && distance[u] + w < distance[v]) {
				console.log("Negative edge weight cycle found!");
				return [[], []];
			}
		}
	}

	return [parent, distance];
};

const edgeList = [
	{
		u: 0,
		v: 1,
		w: -1
	},
	{
		u: 0,
		v: 2,
		w: 4
	},
	{
		u: 1,
		v: 2,
		w: 3
	},
	{
		u: 1,
		v: 3,
		w: 2
	},
	{
		u: 1,
		v: 4,
		w: 2
	},
	{
		u: 3,
		v: 2,
		w: 5
	},
	{
		u: 3,
		v: 1,
		w: 1
	},
	{
		u: 4,
		v: 3,
		w: -3
	}
];
console.log(bellmanford(0, 5, edgeList));
