const rotationOfArray = arr => {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] <= arr[end] && arr[mid] < arr[mid - 1]) {
			return mid;
		} else if (arr[start] <= arr[mid] && arr[mid + 1] < arr[mid]) {
			return mid + 1;
		} else if (arr[mid] > arr[end]) {
			start = mid + 1;
		} else if (arr[mid] < arr[start]) {
			end = mid - 1;
		}
	}
	return -1;
};

console.log(rotationOfArray([40, 50, 10, 20, 30]));
