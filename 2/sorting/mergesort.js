const mergeSort = arr => {
	if (arr.length === 0) {
		return arr;
	}
	if (arr.length < 2) {
		return arr;
	}
	const midpoint = Math.floor(arr.length / 2);
	let left = arr.slice(0, midpoint);
	let right = arr.slice(midpoint);
	mergeSort(left);
	mergeSort(right);
	// console.log({ left, right });
	let i = 0,
		j = 0,
		k = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			arr[k] = left[i];
			i++;
		} else {
			arr[k] = right[j];
			j++;
		}
		k++;
	}
	while (i < left.length) {
		arr[k] = left[i];
		i++;
	}

	while (j < right.length) {
		arr[k] = right[j];
		j++;
	}
	return arr;
};

const arr = [300, 10, 20, 70, 5, 6, 200, 100];

console.log(mergeSort(arr));
