const largestContinuousSum = arr => {
	let sum = arr[0],
		currentSum = arr[0],
		s = 0,
		e = 0,
		cs = 0;
	for (let i = 1; i < arr.length; i++) {
		if (currentSum < 0) {
			cs = i;
			currentSum = arr[i];
		} else {
			currentSum += arr[i];
		}
		if (currentSum > sum) {
			s = cs;
			e = i;
			sum = currentSum;
		}
	}
	console.log(arr.slice(s, e + 1));
	return sum;
};

const ip = [-4, 2, -5, 1, 2, -10, 3, 6, -5, 1];

console.log(largestContinuousSum(ip));
