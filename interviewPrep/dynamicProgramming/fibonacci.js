let calculations = 0;
function fibonacci(n){
	calculations++
	if(n < 2){
		return n;
	}
	return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster(){
	let cache = {};
	return function fib(n){
		if(n in cache){
			return cache[n];
		} else {
			if(n < 2){
				return n;
			}
			else {
				cache[n] = fib(n-1) + fib(n-2);
				return cache[n];
			}
		}
	}
}

const fasterFib = fibonacciMaster();

// console.log('Slow', fibonacci(35))
console.log('DP', fasterFib(100));
// console.log('DP2', fibonacciMaster2(100));
// console.log('we did ' + calculations + ' calculations');

