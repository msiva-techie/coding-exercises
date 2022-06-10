const findTriplet = (arr, sum) => {
	let result = [];
	for (let i = 0; i < arr.length - 2; i++) {
		// let set = new Set(arr.slice(i + 1));
		let set = new Set();
		for (let j = i + 1; j < arr.length; j++) {
			let s = sum - (arr[i] + arr[j]);
			if (set.has(s)) {
				result.push([arr[i], arr[j], s]);
			} else {
				set.add(arr[j]);
			}
		}
	}
	return result;
};

console.log(findTriplet([1, 2, 3, 4, 5, 2], 7));
