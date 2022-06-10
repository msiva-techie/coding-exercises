// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
// 	// let vowelsObj = {};
// 	let vowelsArr = ["a", "e", "i", "o", "u"];
// 	let count = 0;
// 	for (let c of str.toLowerCase()) {
// 		if (vowelsArr.includes(c)) {
// 			// vowelsObj[c] = vowelsObj[c] ? vowelsObj[c]++ : 1;
// 			count++;
// 		}
// 	}
// 	// return Object.values(vowelsObj).reduce((accum, v) => (accum += v), 0);
// 	return count;
// }

function vowels(str) {
	let match = str.match(/[aeiou]/gi);
	return match ? match.length : 0;
}

module.exports = vowels;
