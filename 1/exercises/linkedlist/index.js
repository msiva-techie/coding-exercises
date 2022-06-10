// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(data) {
		let node = new Node(data);
		node.next = this.head;
		this.head = node;
	}
	size() {
		console.log(this);
		let node = this.head;
		let counter = this.head ? 1 : 0;
		while (node?.next) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let node = this.head;
		while (node?.next) {
			node = node.next;
		}
		return node;
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}
	removeLast() {
		if (!this.head) {
			return;
		} else if (!this.head?.next) {
			this.head = null;
			return;
		}
		let node = this.head;
		while (node?.next && node?.next?.next) {
			node = node.next;
		}
		node.next = null;
	}
	insertLast(data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		let node = this.head;
		while (node?.next) {
			node = node.next;
		}
		node.next = new Node(data);
	}
	getAt(index) {
		let node = this.head;
		if (index === 0) {
			return node;
		}
		let counter = 1;
		while (node?.next) {
			node = node.next;
			if (counter === index) {
				return node;
			}
			counter++;
		}
		return null;
	}
	removeAt(index) {
		if (index === 0) {
			if (this.head?.next) {
				this.head = this.head.next;
				return;
			}
			this.head = null;
			return;
		}
		let previous = this.getAt(index - 1);
		if (previous) {
			previous.next = previous?.next?.next || null;
		}
	}
	insertAt(data, index) {
		if (index === 0) {
			if (!this.head) {
				this.head = new Node(data);
			} else if (this.head?.next) {
				this.head = new Node(data, this.head);
			}
			return;
		}
		let counter = 1;
		let node = this.head;
		let previous;
		while (node?.next) {
			node = node.next;
			if (counter === index - 1) {
				previous = node;
			}
			counter++;
		}
		if (previous) {
			previous.next = new Node(data, previous.next);
		} else {
			node.next = new Node(data);
		}
	}
	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter++);
			node = node.next;
		}
	}
	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}
module.exports = { Node, LinkedList };
