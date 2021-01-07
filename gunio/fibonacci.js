/**
 * Fibonacci
The Fibonacci sequence begins like this:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
(each number is the sum of the previous two)

What is the sum of all odd numbers in the Fibonacci sequence that are less
than 10,000?
 **/

function sumFib(num){
	var prev_fib = 0, cur_fib = 1;
	var sum = 0;
	while(cur_fib <= num) {
		if (cur_fib % 2 !== 0) {
			sum += cur_fib;
		}

		// Move on to next Fibonacci number
		var next_fib = cur_fib + prev_fib;
		prev_fib = cur_fib;
		cur_fib = next_fib;
	}
	return sum;
}

sumFib(10000);

