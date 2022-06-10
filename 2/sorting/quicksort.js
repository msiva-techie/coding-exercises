const quickSort = arr => {
	if (arr.length === 0) {
		return arr;
	}
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let pos = 0;

	for (let i = 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			pos++;
			const temp = arr[i];
			arr[i] = arr[pos];
			arr[pos] = temp;
		}
	}
	const temp = arr[0];
	arr[0] = arr[pos];
	arr[pos] = temp;
	return [
		...quickSort(arr.slice(0, pos)),
		arr[pos],
		...quickSort(arr.slice(pos + 1))
	];
};

const arr = [300, 10, 20, 70, 5, 6, 200, 100];

console.log(quickSort(arr));
