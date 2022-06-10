class Node {
	constructor(data, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

module.exports = class DoublyLinkedList {
	constructor() {
		this.head = null;
	}
	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}
	insertAtFirst(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			return;
		}
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
		return true;
	}
	insertAtPosition(prevNode, data) {
		const node = new Node(data);
		if (!prevNode) {
			return false;
		}
		node.next = prevNode.next;
		node.prev = prevNode;
		if (prevNode.next) {
			prevNode.next.prev = node;
		}
		prevNode.next = node;
		return true;
	}
	insertAtTail(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			return true;
		}
		let temp = this.head;
		while (temp && temp.next !== null) {
			temp = temp.next;
		}
		temp.next = node;
		return true;
	}
	delete(delNode) {
		if (delNode.prev) {
			delNode.prev.next = delNode.next;
		}
		if (delNode.next) {
			delNode.next.prev = delNode.prev;
		}
		if (this.head === delNode) {
			this.head = delNode.next;
		}
		return true;
	}
	reverseList() {
		let currentNode = this.head;
		let temp = null;
		while (currentNode) {
			temp = currentNode.prev;
			currentNode.prev = currentNode.next;
			currentNode.next = temp;
			currentNode = currentNode.prev;
		}
		if (temp) {
			this.head = temp.prev;
		}
		return true;
	}
};
