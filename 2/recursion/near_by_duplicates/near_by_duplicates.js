const nearByDuplicates = str => {
	if (str.length === 1) {
		return str;
	}
	if (str[0] === str[1]) {
		return nearByDuplicates(str.substring(1));
	}
	return str[0] + nearByDuplicates(str.substring(1));
};

console.log(nearByDuplicates("coddiinnngg in jjss"));
