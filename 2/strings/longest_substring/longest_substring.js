const longestSubstring = str => {
	let s = 0,
		e = 0,
		max = 0,
		sOfMax = 0;
	let index = {};

	for (let i = 0; i < str.length; i++) {
		if (index[str[i]] != undefined) {
			index[str[i]] = i;
		} else {
			if (index[str[i]] + 1 > s) {
				s = index[str[i]] + 1;
			}
			index[str[i]] = i;
		}
		let lengthOfSubstring = e - s + 1;
		if (lengthOfSubstring > max) {
			max = lengthOfSubstring;
			sOfMax = s;
		}
		e++;
	}
	return str.substring(sOfMax, sOfMax + max);
};

console.log(longestSubstring("zabcdabjkwebfwbzg"));
