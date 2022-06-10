const largestNonContinuousSum = arr => {
	let incl = arr[0];
	let excl = 0;
	const result = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		const temp = incl;
		if (arr[i] + excl >= incl) {
			if (i == 1) {
				result[0] = arr[i];
			} else {
				result.push(arr[i]);
			}
			incl = arr[i] + excl;
		}
		excl = temp;
	}
	console.log(result);
	return incl;
};

const ip = [4, 2, -5, 1, 2, -10, 3, 6, -5, 1];

console.log(largestNonContinuousSum(ip));
