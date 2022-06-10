const permutation = (str, temp = "", result = []) => {
	if (str.length === 0) {
		return result.push(temp);
	}
	for (let i = 0; i < str.length; i++) {
		const ch = str[i];
		const rest = str.slice(0, i) + str.slice(i + 1);
		permutation(rest, temp + ch, result);
	}
	return result;
};

console.log(permutation("ABCD"));
