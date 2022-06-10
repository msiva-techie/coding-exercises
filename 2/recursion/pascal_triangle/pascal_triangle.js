const pascalTriangle = n => {
	if (n === 0) {
		console.log([0]);
		return [0];
	}
	const prevLine = pascalTriangle(n - 1);
	const currentLine = [1];
	for (let i = 0; i < prevLine.length - 1; i++) {
		currentLine.push(prevLine[i] + prevLine[i + 1]);
	}
	currentLine.push(1);
	console.log(currentLine);
	return currentLine;
};

pascalTriangle(5);
