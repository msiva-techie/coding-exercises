const fibonacci = (n, obj = {}) => {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	if (obj[n]) {
		return obj[n];
	}
	obj[n] = fibonacci(n - 1, obj) + fibonacci(n - 2, obj);
	return obj[n];
};

console.log(fibonacci(7));
