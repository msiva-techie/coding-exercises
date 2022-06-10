// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let obj = {};
	for (let c of str) {
		obj[c] = obj[c] ? obj[c]++ : 1;
	}
	let max = 0;
	let maxKey;
	for (let key in obj) {
		if (obj[key] > max) {
			max = obj[key];
			maxKey = key;
		}
	}
	return maxKey;
}

module.exports = maxChar;
