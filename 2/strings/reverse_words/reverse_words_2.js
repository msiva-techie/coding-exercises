const reverseWordsHelper = (strArr, e) => {
	while (strArr[e] !== " " && e !== strArr.length) {
		e++;
	}
	return e;
};

const swap = (strArr, s, e) => {
	while (s < e) {
		let t = "";
		t = strArr[s];
		strArr[s] = strArr[e];
		strArr[e] = t;
		s++;
		e--;
	}
};

const reverseWords = str => {
	strArr = [];
	for (let i = str.length - 1; i >= 0; i--) {
		strArr.push(str[i]);
	}
	let s = 0,
		e = 0;
	while (e !== str.length) {
		e = reverseWordsHelper(strArr, e + 1);
		swap(strArr, s, e - 1);
		s = e + 1;
	}
	return strArr.join("");
};

console.log(reverseWords("We are programmers"));
