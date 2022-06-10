const BST = require("../index");

const populateStack = (root, stack) => {
	while (root) {
		stack.push(root);
		root = root.left;
	}
};

const inOrderTraversal = root => {
	const stack = [];
	const result = [];

	populateStack(root, stack);

	while (stack.length > 0) {
		let node = stack.pop();
		result.push(node.data);
		if (node.right) {
			populateStack(node.right, stack);
		}
	}
	return result;
};

const p = new BST(10);

p.insert(5);
p.insert(2);
p.insert(20);
p.insert(12);
p.insert(30);

console.log(inOrderTraversal(p));
