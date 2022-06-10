const DoublyLinkedList = require("./doublylinkedlist");

const list1 = new DoublyLinkedList();
list1.insertAtFirst(51);
list1.insertAtFirst(42);
list1.insertAtFirst(33);
list1.insertAtFirst(31);

const list2 = new DoublyLinkedList();
list2.insertAtFirst(52);
list2.insertAtFirst(43);
list2.insertAtFirst(30);
list2.insertAtFirst(20);

const mergeTwoLists = (list1, list2) => {
	let temp1 = list1.head;
	let temp2 = list2.head;
	const list = new DoublyLinkedList();
	while (temp1 && temp2) {
		if (temp1.data <= temp2.data) {
			list.insertAtTail(temp1.data);
			temp1 = temp1.next;
		} else if (temp2.data < temp1.data) {
			list.insertAtTail(temp2.data);
			temp2 = temp2.next;
		}
	}
	while (temp1) {
		list.insertAtTail(temp1.data);
		temp1 = temp1.next;
	}
	while (temp2) {
		list.insertAtTail(temp2.data);
		temp2 = temp2.next;
	}
	return list;
};

const list = mergeTwoLists(list1, list2);

list.forEach((node, i) => {
	console.log(node.data);
});
