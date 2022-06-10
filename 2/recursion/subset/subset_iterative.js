// const subset = arr => {
// 	let subsetArr = [[]];
// 	for (let v of arr) {
// 		subsetArr = [...subsetArr, ...subsetArr.map(a => [...a, v])];
// 	}
// 	return subsetArr;
// };

// console.log(subset([1, 2, 3]));

const subset = arr =>
	arr.reduce(
		(subsetArr, value) =>
			(subsetArr = [
				...subsetArr,
				...subsetArr.map(subsetElement => [...subsetElement, value])
			]),
		[[]]
	);
console.log(subset([1, 2, 3]));

// const findAllSubsetsOfGivenSet = originalArrayValue =>
// 	originalArrayValue.reduce(
// 		(givenSet, setValue) =>
// 			givenSet.concat(givenSet.map(givenSet => [...givenSet, setValue])),
// 		[[]]
// 	);
// console.log(findAllSubsetsOfGivenSet([1, 2, 3]));
