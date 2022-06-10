const findTriplet = (arr, sum) => {
	let result = [];
	arr.sort();
	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1,
			right = arr.length - 1;
		while (left < right) {
			if (arr[i] + arr[left] + arr[right] === sum) {
				result.push([arr[i], arr[left], arr[right]]);
				left++;
				right--;
			} else if (arr[i] + arr[left] + arr[right] < sum) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};

console.log(findTriplet([1, 2, 3, 5, 4, 2], 7));
