// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
// 	let a = 0,
// 		b = 1,
// 		c = 0;
// 	if (n === 0) {
// 		return 0;
// 	}
// 	if (n === 1) {
// 		return 1;
// 	}
// 	for (let i = 1; i < n; i++) {
// 		c = a + b;
// 		a = b;
// 		b = c;
// 	}
// 	return c;
// }

function memoize(fun) {
	let cache = {};

	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}
		let result = fun(...args);
		cache[args] = result;
		return result;
	};
}
function slowFib(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
