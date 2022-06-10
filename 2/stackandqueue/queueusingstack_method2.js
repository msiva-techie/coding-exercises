const Stack = require("./stack");

class QueueUsingStack {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	enqueue(data) {
		if (this.s1.isEmpty()) {
			this.s1.push(data);
			return;
		}

		while (!this.s1.isEmpty()) {
			this.s2.push(this.s1.pop());
		}

		this.s1.push(data);

		while (!this.s2.isEmpty()) {
			this.s1.push(this.s2.pop());
		}
	}

	dequeue() {
		if (this.s1.isEmpty()) {
			return -1;
		}
		return this.s1.pop();
	}
}

const q = new QueueUsingStack();

q.enqueue(1);
console.log(q.s1.data);
console.log(q.s2.data);
console.log("...................");
q.enqueue(2);
q.enqueue(3);

console.log(q.s1.data);
console.log(q.s2.data);
console.log("...................");

console.log("deque....");
console.log(q.dequeue());
console.log("...................");

console.log(q.s1.data);
console.log(q.s2.data);
console.log("...................");

q.enqueue(4);

console.log(q.s1.data);
console.log(q.s2.data);
console.log("...................");

console.log("deque....");
console.log(q.dequeue());
console.log("...................");

console.log(q.s1.data);
console.log(q.s2.data);
console.log("...................");
