const getSpiralMatrix = n => {
	let result = [];
	for (let i = 0; i < n; i++) {
		result.push([]);
	}
	console.log(result);
	let startColumn = 0,
		startRow = 0,
		endRow = n - 1,
		endColumn = n - 1;
	let counter = 1;
	while (startColumn <= endColumn && startRow <= endRow) {
		for (let i = startColumn; i <= endColumn; i++) {
			result[startRow][i] = counter++;
		}
		startRow++;
		for (let i = startRow; i <= endRow; i++) {
			result[i][endColumn] = counter++;
		}
		endColumn--;
		for (let i = endColumn; i >= startColumn; i--) {
			result[endRow][i] = counter++;
		}
		endRow--;
		for (let i = endRow; i >= startRow; i--) {
			result[i][startColumn] = counter++;
		}
		startColumn++;
	}
	return result;
};

console.log(getSpiralMatrix(6));
