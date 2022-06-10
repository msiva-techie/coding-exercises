const BST = require("./index");

const levelOrder = root => {
	let queue = [],
		result = [[]];
	if (!root) {
		return false;
	}
	queue.push(root);
	queue.push(null);

	while (queue.length > 0) {
		const node = queue.shift();
		if (node === null && queue.length > 1) {
			queue.push(null);
			result.push([]);
		} else if (node) {
			result[result.length - 1].push(node.data);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
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

console.log(levelOrder(p));
