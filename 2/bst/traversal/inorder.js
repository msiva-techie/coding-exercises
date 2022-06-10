const BST = require("../index");

const inOrderTraversal = (root, result = []) => {
	if (!root) {
		return;
	}
	inOrderTraversal(root.left, result);
	result.push(root.data);
	inOrderTraversal(root.right, result);
	return result;
};

// const p = new BST(10);

// p.insert(5);
// p.insert(2);
// p.insert(20);
// p.insert(12);
// p.insert(30);

// console.log(inOrderTraversal(p));

module.exports = inOrderTraversal;
