const decimalToBinary = num => {
	let binary = "",
		q = 0;
	while (num > 1) {
		q = Math.floor(num / 2);
		binary = (num % 2) + binary;
		num = q;
	}
	binary = q + binary;
	return binary;
};

console.log(decimalToBinary(13));
