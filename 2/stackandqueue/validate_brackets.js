const Stack = require("./stack");

const validateBrackets = exp => {
	const obj = {
		")": "(",
		"}": "{",
		"]": "["
	};
	const s = new Stack();
	const open = new Set(["(", "{", "["]);
	const close = new Set([")", "}", "]"]);
	for (let c of exp) {
		if (open.has(c)) {
			s.push(c);
		} else if (close.has(c)) {
			if (s.peek() === obj[c]) {
				s.pop();
			} else {
				return false;
			}
		}
	}
	return s.isEmpty();
};

console.log(validateBrackets("{[a+(b*c)]/d}"));
