// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
	}

	enqueue(record) {
		this.data.push(record);
	}

	dequeue() {
		return this.data.shift();
	}

	isEmpty() {
		return this.data.length === 0;
	}

	size() {
		return this.data.length;
	}
}

module.exports = Queue;
