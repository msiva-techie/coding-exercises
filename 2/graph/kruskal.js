const DisjointSet = require("./disjointset");

const kruskal = (numberOfVertices, edgeList) => {
	edgeList.sort((a, b) => a.w - b.w);
	const d = new DisjointSet(numberOfVertices);
	let count = 0,
		result = [];
	for (let e = 0; e < edgeList.length; e++) {
		if (d.unionByRank(edgeList[e].u, edgeList[e].v)) {
			count++;
			result.push(edgeList[e]);
		}
		if (count === numberOfVertices - 1) {
			return result;
		}
	}
	return result;
};

const edgeList = [
	{
		u: 0,
		v: 1,
		w: 10
	},
	{
		u: 0,
		v: 2,
		w: 6
	},
	{
		u: 0,
		v: 3,
		w: 5
	},
	{
		u: 1,
		v: 3,
		w: 15
	},
	{
		u: 2,
		v: 3,
		w: 4
	}
];
console.log(kruskal(4, edgeList));
