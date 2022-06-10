const decimalToBinary = num => {
	if (num < 2) {
		return num;
	}
	let q = decimalToBinary(Math.floor(num / 2));
	let r = decimalToBinary(num % 2);
	return `${q}${r}`;
};

console.log(decimalToBinary(13));
