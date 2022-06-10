const islandProblemHelper = (i, j, adjMatrix) => {
	// console.log({ i, j });
	if (i >= adjMatrix.length || i < 0 || j >= adjMatrix[0].length || j < 0) {
		return;
	}

	if (adjMatrix[i][j] === 1) {
		adjMatrix[i][j] = 2;
		islandProblemHelper(i, j + 1, adjMatrix);
		islandProblemHelper(i, j - 1, adjMatrix);
		islandProblemHelper(i + 1, j, adjMatrix);
		islandProblemHelper(i - 1, j, adjMatrix);
		return true;
	}
	return false;
};

const islandProblem = adjMatrix => {
	let count = 0;
	for (let i = 0; i < adjMatrix.length; i++) {
		for (let j = 0; j < adjMatrix.length; j++) {
			if (islandProblemHelper(i, j, adjMatrix)) {
				count++;
			}
		}
	}
	return count;
};

const input = [
	[1, 1, 1, 1, 0],
	[1, 1, 0, 1, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0]
];

const input1 = [
	[1, 1, 0, 0, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1]
];

const input2 = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
];

console.log("---------------------------");

console.log(islandProblem(input));

console.log("---------------------------");

console.log(islandProblem(input1));

console.log("---------------------------");

console.log(islandProblem(input2));
