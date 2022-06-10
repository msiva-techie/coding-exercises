// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// 	let counter = 0;
// 	let result = [];
// 	while (counter < array.length) {
// 		let insideArr = [];
// 		for (i = 0; i < size && array[counter]; i++) {
// 			insideArr.push(array[counter]);
// 			counter++;
// 		}
// 		result.push(insideArr);
// 	}
// 	return result;
// }

function chunk(array, size) {
	let counter = 0;
	let result = [];
	while (counter < array.length) {
		result.push(array.slice(counter, counter + size));
		counter += size;
	}
	return result;
}

// function chunk(array, size) {
// 	let chunked = [];
// 	for (let element of array) {
// 		let last = chunked[chunked.length - 1];
// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}
// 	return chunked;
// }

module.exports = chunk;
