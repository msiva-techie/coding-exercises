const BST = require("./index");

const left = (root, result = []) => {
	if (!root.left) {
		return;
	}
	result.push(root.data);
	left(root.left, result);
};

const right = (root, result = []) => {
	if (!root.right) {
		return;
	}
	right(root.right, result);
	result.push(root.data);
};

const leaf = (root, result = []) => {
	if (!root) {
		return;
	}
	if (!root.left && !root.right) {
		result.push(root.data);
	}
	leaf(root.left, result);
	leaf(root.right, result);
};

const boundary = root => {
	const result = [];
	left(root, result);
	leaf(root, result);
	right(root, result);
	result.length = result.length - 1;
	return result;
};

const p = new BST(10);

p.insert(5);
p.insert(2);
p.insert(7);
p.insert(9);
p.insert(6);
p.insert(20);
p.insert(12);
p.insert(30);

console.log(boundary(p));
