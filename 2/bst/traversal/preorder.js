const BST = require("../index");

const preOrderTraversal = (root, result = []) => {
	if (!root) {
		return;
	}
	result.push(root.data);
	preOrderTraversal(root.left, result);
	preOrderTraversal(root.right, result);
	return result;
};

const p = new BST(10);

p.insert(5);
p.insert(2);
p.insert(20);
p.insert(12);
p.insert(30);

console.log(preOrderTraversal(p));
