/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return
 * when needed. Usually you have 2 returns
 * @type {number}
 *
 * pros: Dry Readability
 *
 * cons: Large Stack
 *
 * Every time you are using a tree or converting something
 * into a tree, consider recursion.
 *
 * 1. Divided into a number of subproblems that are smaller instances of the same problems.
 * 2. Each instance of the subproblem is identical in nature.
 * 3. The solutions of each subproblem can be combined to solve the problem at hand.
 *
 */

let counter = 0;
function inception(){
	if(counter > 3) {
		return 'done';
	}
	counter++;
	return inception();
}

inception()
