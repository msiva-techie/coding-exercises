/**
 * priority => red (0), white (1), blue (2)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
	let red = 0;
	let white = 0;
	let blue = 0;
	for (let num of nums) {
		if (num === 0) {
			red++;
		} else if (num === 1) {
			white++;
		} else if (num === 2) {
			blue++;
		}
	}

	let k = 0;

	while (red) {
		nums[k] = 0;
		red--;
		k++;
	}
	while (white) {
		nums[k] = 1;
		white--;
		k++;
	}
	while (blue) {
		nums[k] = 2;
		blue--;
		k++;
	}
	return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
