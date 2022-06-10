const removeDuplicatesInPlace = str => {
	let r = 0,
		w = 0;
	let set = new Set();
	// since strings in js are immutable, using array
	const strArr = str.split("");
	for (let c of strArr) {
		if (!set.has(c)) {
			set.add(c);
			strArr[w] = strArr[r];
			w++;
		}
		r++;
	}
	strArr.length = w;
	return strArr.join("");
};

console.log(removeDuplicatesInPlace("abscdcdazeaf"));
