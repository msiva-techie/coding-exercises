const binarySearch = (arr, key) => {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (key === arr[mid]) {
			return true;
		}
		if (key > arr[mid]) {
			start = mid + 1;
		} else if (key < arr[mid]) {
			end = mid - 1;
		}
	}
	return false;
};
console.log(binarySearch([30, 40, 50, 60, 80], 10));
