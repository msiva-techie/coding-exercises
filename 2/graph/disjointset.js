class DisjointSet {
	constructor(n) {
		this.parent = Array(n + 1).fill(-1);
		this.rank = Array(n + 1).fill(0);
	}

	find(element) {
		if (this.parent[element] === -1) {
			return element;
		}
		return (this.parent[element] = this.find(this.parent[element]));
	}

	unionByRank(source, destination) {
		let from = this.find(source);
		let to = this.find(destination);

		if (from === to) {
			// console.log("Cycle found....");
			return false;
		}

		if (this.rank[from] > this.rank[to]) {
			this.parent[to] = from;
		} else if (this.rank[to] > this.rank[from]) {
			this.parent[from] = to;
		} else {
			this.parent[from] = to;
			this.rank[to]++;
		}
		return true;
	}
}

// const disjointSet = new DisjointSet(6);

// console.log(disjointSet.unionByRank(5, 6));
// console.log(disjointSet.unionByRank(4, 6));
// console.log(disjointSet.unionByRank(3, 6));
// console.log(disjointSet.unionByRank(2, 6));

// console.log(disjointSet.unionByRank(6, 5));

// console.log(disjointSet.find(6));

module.exports = DisjointSet;
