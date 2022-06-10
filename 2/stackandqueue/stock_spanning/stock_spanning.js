const Stack = require("../stack");

const stockSpanning = prices => {
	const spans = [1];
	const s = new Stack();
	s.push(0);
	for (let i = 1; i < prices.length; i++) {
		while (!s.isEmpty() && prices[s.peek()] <= prices[i]) {
			s.pop();
		}
		if (s.isEmpty()) {
			spans.push(i + 1);
		} else {
			spans.push(i - s.peek());
		}
		s.push(i);
	}
	return spans;
};

console.log(stockSpanning([100, 80, 60, 70, 60, 75, 85, 200]));
