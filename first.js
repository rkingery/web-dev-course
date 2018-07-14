function isEven(n) {
	return n%2 == 0
}

function factorial(n) {
	f = 1;
	for (i=1;i<=n;i++) {
		f *= i;
	}
	return f;
}

function kebabToSnake(str) {
	return str.replace('-','_');
}