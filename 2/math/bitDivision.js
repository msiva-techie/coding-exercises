const bitDivision = (dividend, divisor) => {
	if (dividend === divisor || divisor > dividend || divisor === 1) {
		return 1;
	}
	if (divisor === 0) {
		return 0;
	}
	let temp = divisor,
		quotient = 1;
	while (temp < dividend) {
		quotient <<= 1;
		temp <<= 1;
	}
	if (temp > dividend) {
		quotient >>= 1;
		temp >>= 1;
		quotient += bitDivision(dividend - temp, divisor);
	}
	return quotient;
};

console.log(bitDivision(40, 4));
