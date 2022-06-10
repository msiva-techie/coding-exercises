const BST = require("../index");

const postOrderTraversal = root => {
	const stack = [];
	let result = [];

	stack.push(root);

	while (stack.length > 0) {
		const node = stack.pop();
		result = [node.data, ...result];

		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
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

console.log(postOrderTraversal(p));
