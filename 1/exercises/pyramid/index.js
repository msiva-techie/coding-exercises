// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
// 	let mid = Math.floor((n * 2 - 1) / 2);
// 	for (let i = 0; i < n; i++) {
// 		let str = "";
// 		for (let j = 0; j < n * 2 - 1; j++) {
// 			if (j >= mid - i && j <= mid + i) {
// 				str += "#";
// 			} else {
// 				str += " ";
// 			}
// 		}
// 		console.log(str);
// 	}
// }

function pyramid(n, i = 0, str = "") {
	if (n === i) {
		return;
	}
	let mid = Math.floor((n * 2 - 1) / 2);
	if (str.length < n * 2 - 1) {
		str += str.length >= mid - i && str.length <= mid + i ? "#" : " ";
		return pyramid(n, i, str);
	}
	console.log(str);
	return pyramid(n, i + 1);
}

module.exports = pyramid;
