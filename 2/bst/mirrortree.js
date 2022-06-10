const BST = require("./index");
const inOrderTraversal = require("./traversal/inorder");

const mirrorTree = root => {
	if (!root) {
		return;
	}
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	mirrorTree(root.left);
	mirrorTree(root.right);
};

const p = new BST(10);

p.insert(5);
p.insert(2);
p.insert(20);
p.insert(12);
p.insert(30);

console.log(inOrderTraversal(p));

mirrorTree(p);

console.log(inOrderTraversal(p));
