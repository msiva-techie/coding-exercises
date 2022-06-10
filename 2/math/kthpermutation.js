const factorial = n => {
	if (n === 1 || n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
};

const kthPermutationHelper = (nArr, n, k, result = "") => {
	if (nArr.length === 0) {
		return result;
	}
	const itemsInBlock = factorial(n - 1);
	const selection = Math.floor((k - 1) / itemsInBlock);
	result += nArr[selection];
	nArr.splice(selection, 1);
	n = n - 1;
	k = k - itemsInBlock * selection;
	return kthPermutationHelper(nArr, n, k, result);
};

const kthPermutation = (n, k) => {
	const nArr = Array(n)
		.fill(0)
		.map((v, i) => v + i + 1);
	return kthPermutationHelper(nArr, n, k);
};

console.log(kthPermutation(3, 6));
