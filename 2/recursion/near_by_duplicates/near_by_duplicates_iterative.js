const nearByDuplicates = str => {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		// if (i === str.length - 1) {
		// 	result = result + str[i];
		// 	break;
		// }
		if (str[i] !== str[i + 1]) {
			result = result + str[i];
		}
	}
	return result;
};

console.log(nearByDuplicates("coddiiinng iin jjsss"));
