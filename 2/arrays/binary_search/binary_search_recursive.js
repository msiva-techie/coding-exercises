const binarySearchHelper = (arr, start, end, key) => {
	if (start > end) {
		return false;
	}
	let mid = Math.floor((start + end) / 2);
	if (key === arr[mid]) {
		return true;
	}
	if (key > arr[mid]) {
		return binarySearchHelper(arr, mid + 1, end, 30);
	} else if (key < arr[mid]) {
		return binarySearchHelper(arr, start, mid - 1, 30);
	}
};

const binarySearch = (arr, key) => {
	return binarySearchHelper(arr, 0, arr.length - 1, key);
};
console.log(binarySearch([30, 40, 50, 60, 80], 10));
