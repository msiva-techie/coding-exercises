const stockSpanning = prices => {
	const spans = [1];
	for (let i = 1; i < prices.length; i++) {
		let counter = 1;
		while (i - counter >= 0 && prices[i - counter] <= prices[i]) {
			counter++;
		}
		spans.push(counter);
	}
	return spans;
};

console.log(stockSpanning([100, 80, 60, 70, 60, 75, 85, 200]));
