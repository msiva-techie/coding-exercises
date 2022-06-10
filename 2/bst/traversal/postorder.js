const BST = require("../index");

const postOrderTraversal = (root, result = []) => {
	if (!root) {
		return;
	}
	postOrderTraversal(root.left, result);
	postOrderTraversal(root.right, result);
	result.push(root.data);
	return result;
};

const p = new BST(10);

p.insert(5);
p.insert(2);
p.insert(20);
p.insert(12);
p.insert(30);

console.log(postOrderTraversal(p));
