// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const arr = [];
	const width = [];
	if (root) {
		arr.push(root, "s");
	}
	let count = 0;
	while (arr.length > 0) {
		const first = arr.shift();
		if (first === "s") {
			width.push(count);
			arr.push("s");
			count = 0;
			if (arr.length === 1) {
				break;
			}
		} else {
			count++;
			arr.push(...first.children);
		}
	}
	return width;
}

module.exports = levelWidth;
