const pascalTriangle = n => {
	if (n === 0) {
		return [0];
	}
	const result = [[0]];
	for (let i = 1; i < n + 1; i++) {
		const line = [1];
		for (let j = 0; j < result[i - 1].length - 1; j++) {
			line.push(result[i - 1][j] + result[i - 1][j + 1]);
		}
		line.push(1);
		result.push(line);
	}
	return result;
};

console.log(pascalTriangle(5));
