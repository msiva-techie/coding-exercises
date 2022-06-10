const Queue = require("./queue");

class StackUsingQueue {
	constructor() {
		this.q1 = new Queue();
		this.q2 = new Queue();
	}

	push(data) {
		if (this.q1.size() === 0) {
			this.q1.enqueue(data);
			return;
		}
		this.q2.enqueue(data);
		while (this.q1.size()) {
			this.q2.enqueue(this.q1.dequeue());
		}
		let temp = this.q1;
		this.q1 = this.q2;
		this.q2 = temp;
	}

	pop() {
		if (this.q1.size() === 0) {
			return -1;
		}
		return this.q1.dequeue();
	}

	forEach(fn) {
		return this.q1.data.forEach(fn);
	}
}

const s = new StackUsingQueue();

s.push(1);
s.push(2);
s.push(3);

s.forEach(element => {
	console.log(element);
});

console.log("................");
s.pop();
console.log("................");

s.forEach(element => {
	console.log(element);
});

s.push(4);
console.log("................");

s.forEach(element => {
	console.log(element);
});
