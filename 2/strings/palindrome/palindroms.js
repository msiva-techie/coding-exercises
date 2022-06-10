const isPalindrome = str => {
	let result = [];
	for (let i = str.length - 1; i >= 0; i--) {
		result.push(str[i]);
	}
	if (result.join("") === str) {
		return true;
	}
	return false;
};

console.log(isPalindrome("hah1"));
