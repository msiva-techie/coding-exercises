const BST = require("../index");

const preOrderTraversal = root => {
	const stack = [];
	const result = [];

	stack.push(root);

	while (stack.length > 0) {
		const node = stack.pop();
		result.push(node.data);
		if (node.right) {
			stack.push(node.right);
		}
		if (node.left) {
			stack.push(node.left);
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

console.log(preOrderTraversal(p));
