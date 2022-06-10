const maxSellProblem = arr => {
	let profit = 0,
		dayToBuy = 0,
		dayToSell = 0,
		min = arr[0],
		minIndex = 0;

	for (let i = 1; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
			minIndex = i;
		} else {
			let diff = arr[i] - min;
			if (diff > profit) {
				profit = diff;
				dayToBuy = minIndex;
				dayToSell = i;
			}
		}
	}
	return {
		dayToBuy,
		dayToSell,
		buyRate: arr[dayToBuy],
		sellRate: arr[dayToSell],
		profit
	};
};

console.log("Day starts from 0");
console.log(maxSellProblem([5, 10, 22, 5, 15, 30, 1, 11]));
