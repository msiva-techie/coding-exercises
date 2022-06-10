const moveToLeftSide = arr => {
	let r = arr.length - 1;
	let w = arr.length - 1;
	while (r >= 0) {
		if (arr[r] !== 0) {
			arr[w] = arr[r];
			w--;
		}
		r--;
	}
	while (w >= 0) {
		arr[w] = 0;
		w--;
	}
	return arr;
};

const moveToRightSide = arr => {
	let r = 0;
	let w = 0;
	while (r < arr.length) {
		if (arr[r] !== 0) {
			arr[w] = arr[r];
			w++;
		}
		r++;
	}
	while (w < arr.length) {
		arr[w] = 0;
		w++;
	}
	return arr;
};

console.log(moveToLeftSide([50, 10, 0, 20, 0, 30, 40, 0, 0]));

console.log(moveToRightSide([50, 10, 0, 20, 0, 30, 40, 0, 0]));
