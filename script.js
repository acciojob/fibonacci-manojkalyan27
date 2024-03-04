function fibonacci(num) {
// your code here
	if (num === 1) {
		return 0;
	}
	if (num === 2) {
		return 1;
	}
	
    let x = fibonacci(num) + fibonacci(num -1);

	return x;
}

module.exports = fibonacci;
