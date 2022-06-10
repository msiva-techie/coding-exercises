const coinChangeProblem = (amount, denominations) => {
	const result = new Array(amount + 1).fill(0);
	result[0] = 1;
	for (let d of denominations) {
		for (let i = d; i <= amount; i++) {
			result[i] += result[i - d];
		}
	}
	console.log(result);
	return result[result.length - 1];
};

const denominations = [1, 5, 10];
const amount = 10;

console.log(coinChangeProblem(amount, denominations));
