// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function formMap(str) {
	let obj = {};
	for (let char of str) {
		obj[char] = obj[char] ? obj[char]++ : 1;
	}
	return obj;
}

function anagrams(stringA, stringB) {
	stringA = stringA.replace(/[^\w]/gm, "").toLowerCase();
	stringB = stringB.replace(/[^\w]/gm, "").toLowerCase();
	if (stringA.length !== stringB.length) {
		return false;
	}
	strAMap = formMap(stringA);
	strBMap = formMap(stringB);
	for (let key in strAMap) {
		if (strAMap[key] !== strBMap[key]) {
			return false;
		}
	}
	return true;
}

module.exports = anagrams;
