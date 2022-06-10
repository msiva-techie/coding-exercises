const BST = require("./index");

const isSameTree = (p, q) => {
	if (!p && !q) {
		return true;
	}
	return (
		p.data === q.data &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
};

const p = new BST(10);
const q = new BST(10);

p.insert(5);
p.insert(2);
p.insert(20);
p.insert(12);
p.insert(30);

q.insert(5);
q.insert(2);
q.insert(20);
q.insert(12);
q.insert(30);

console.log(isSameTree(p, q));
