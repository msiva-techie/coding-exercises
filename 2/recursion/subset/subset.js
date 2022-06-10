const subset = (arr, i, value, subsetArr) => {
	if (i === arr.length) {
		return subsetArr.push(value);
	}
	subset(arr, i + 1, [...value, arr[i]], subsetArr);
	subset(arr, i + 1, value, subsetArr);
};

const subsetArr = [];
// subset(["a", "b", "c", "d"], 0, [], subsetArr);
subset([1, 2, 3], 0, [], subsetArr);

console.log(subsetArr);
