const search = (arr, key) => {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === key) {
			return true;
		}
		if (arr[mid] <= arr[end] && key > arr[mid] && key <= arr[end]) {
			start = mid + 1;
		} else if (arr[start] <= arr[mid] && key < arr[mid] && key >= arr[start]) {
			end = mid - 1;
		} else if (arr[mid] > arr[end]) {
			start = mid + 1;
		} else if (arr[mid] < arr[start]) {
			end = mid - 1;
		} else {
			return -1;
		}
	}
};

console.log(search([35, 40, 50, 10, 20, 30], 35));
