/* operations allowed 
c => copy
p => paste
print a character for n number of times using minimal amount of operations
currently one occurence of character is printed
u can either copy fully and paste or paste the already copied one at each instance.
*/

const minPath = n => {
	let current = 1;
	let available = 0;
	let steps = 0;
	while (current < n) {
		if (n % current === 0) {
			available = current;
			current += available;
			console.log("c");
			console.log("p");
			console.log("-------------------");
			steps += 2;
		} else {
			current += available;
			console.log("p");
			console.log("-------------------");
			steps += 1;
		}
	}
	return steps;
};

console.log(minPath(18));
