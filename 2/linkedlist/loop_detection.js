const DoublyLinkedList = require("./doublylinkedlist");

const list = new DoublyLinkedList();

list.insertAtFirst(3);
list.insertAtFirst(2);
list.insertAtFirst(1);

// method 1: using map

const replacerFunc = () => {
	const visited = new WeakSet();
	return (key, value) => {
		if (typeof value === "object" && value !== null) {
			if (visited.has(value)) {
				return;
			}
			visited.add(value);
		}
		return value;
	};
};

const detectLoopUsingObj = list => {
	let temp = list.head;
	const obj = {};
	while (temp) {
		// console.log(temp);
		if (obj[JSON.stringify(temp, replacerFunc())]) {
			return true;
		} else {
			obj[JSON.stringify(temp, replacerFunc())] = true;
		}
		temp = temp.next;
	}
	// console.log(obj);
	return false;
};

// console.log(detectLoopUsingObj(list));

// method 2: using floyds

const detectLoopUsingFloyds = list => {
	let slow = list.head;
	let fast = list.head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}
	return false;
};

console.log(detectLoopUsingFloyds(list));
