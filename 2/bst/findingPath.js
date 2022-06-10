const BST = require("./index");

const findingPath = (root, sum) => {
	if (!root) {
		return false;
	}
	sum = sum - root.data;
	if (sum === 0 && !root.left && !root.right) {
		return true;
	}
	return findingPath(root.left, sum) || findingPath(root.right, sum);
};

const bst = new BST(5);

bst.insert(4);
bst.insert(8);
bst.insert(11);
bst.insert(13);
bst.insert(4);
bst.insert(7);
// bst.insert(6);
bst.insert(2);
bst.insert(1);

console.log(findingPath(bst, 20));
