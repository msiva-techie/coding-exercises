const insertionSort = arr => {
	for (let i = 0; i < arr.length - 1; i++) {
		let j = i + 1;

		while (j > 0 && arr[j - 1] > arr[j]) {
			let temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;
			j--;
		}
	}
	return arr;
};

console.log(insertionSort([300, 10, 20, 70, 5, 6, 200, 100]));
