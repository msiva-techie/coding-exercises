const prices = [100, 80, 60, 70, 60, 75, 85];
const spans = [1, 1, 1, 2, 1, 4, 6];

const calculateSpan = price => {
	let index = prices.length - 1;
	while (index >= 0 && prices[index] <= price) {
		index = index - spans[index];
	}
	prices.push(price);
	const span = prices.length - 1 - index;
	spans.push(span);
	return span;
};

// console.log(calculateSpan(90));

console.log(calculateSpan(110));
console.log(calculateSpan(50));
console.log(calculateSpan(200));

console.log({ prices, spans });
