const findGreatestCommonElement = (arr1, arr2, arr3) => {
	let i = arr1.length - 1,
		j = arr2.length - 1,
		k = arr3.length - 1;
	while (i >= 0 && j >= 0 && k >= 0) {
		if (arr1[i] == arr2[j] && arr2[j] === arr3[k]) {
			return arr1[i];
		}
		if (arr1[i] > arr2[j] || arr1[i] > arr3[k]) {
			i--;
		}
		if (arr2[j] > arr1[i] || arr2[j] > arr3[k]) {
			j--;
		}
		if (arr3[k] > arr1[i] || arr3[k] > arr2[j]) {
			k--;
		}
	}
	return null;
};

console.log(
	findGreatestCommonElement(
		[1, 2, 3, 4, 5, 60],
		[2, 3, 4, 5, 60],
		[4, 5, 60, 70, 80]
	)
);
