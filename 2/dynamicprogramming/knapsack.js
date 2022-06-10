const knapsack = (weight, profit, bw) => {
	const n = weight.length;
	const table = Array(n)
		.fill()
		.map(() => Array(bw + 1).fill(0));

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < bw + 1; j++) {
			if (j === 0) {
				continue;
			}
			if (weight[i] <= j) {
				const currentProfit = profit[i];
				const currentWeight = weight[i];
				let resultantProfit = 0;
				let p1 = 0,
					p2 = 0;
				if (i - 1 >= 0 && table[i - 1][j] > currentProfit) {
					p1 = table[i - 1][j];
				}
				if (j - currentWeight > 0 && i - 1 >= 0) {
					p2 = table[i - 1][j - currentWeight] + currentProfit;
				}
				if (p1 >= p2 && p1 >= currentProfit) {
					resultantProfit = p1;
				} else if (p2 >= p1 && p2 >= currentProfit) {
					resultantProfit = p2;
				} else {
					resultantProfit = currentProfit;
				}
				table[i][j] = resultantProfit;
			} else if (i - 1 >= 0) {
				table[i][j] = table[i - 1][j];
			}
		}
	}
	console.log(table);
	return table[n - 1][bw];
};

const weight = [5, 3, 4, 2];
const profit = [6, 5, 7, 3];

const bw = 6;
console.log(knapsack(weight, profit, bw));
