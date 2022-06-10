// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let spiralMatrix = [];
	let startRow = 0,
		endRow = n - 1,
		startColumn = 0,
		endColumn = n - 1,
		counter = 1;

	for (let i = 0; i < n; i++) {
		spiralMatrix.push([]);
	}
	while (startRow <= endRow && startColumn <= endColumn) {
		for (let j = startRow; j <= endColumn; j++) {
			spiralMatrix[startRow][j] = counter++;
		}
		startRow++;
		for (let j = startRow; j <= endRow; j++) {
			spiralMatrix[j][endColumn] = counter++;
		}
		endColumn--;
		for (let j = endColumn; j >= startColumn; j--) {
			spiralMatrix[endRow][j] = counter++;
		}
		endRow--;
		for (let j = endRow; j >= startRow; j--) {
			spiralMatrix[j][startColumn] = counter++;
		}
		startColumn++;
	}
	return spiralMatrix;
}

module.exports = matrix;
