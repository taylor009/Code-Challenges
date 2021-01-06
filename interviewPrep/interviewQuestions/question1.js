/**
 * Given 2 arrays, create a function that let's a user know (true/false) weather these two arrays contain any common items
 *
 * For Example:
 * const array1 = ['a', 'b', 'c', 'x'];
 * const array2 = ['z', 'y', 'i'];
 * should return false\/
 *
 * const array1 = ['a', 'b', 'c', 'x'];
 * const array2 = ['z', 'y', 'x'];
 * should return true.
 *
 * 2 parameters - arrays - no size limit
 * return true or false
 *
 * 0(n^2)
 **/


// Simplest solution
// time O(n^2) || space O(1)
const stringCheck = (a, b) => {
	for(let i = 0; i < a.length; i++) {
		for(let j = 0; j < b.length; j++) {
			if(a[i] === b[j]){
				return true;
				console.log("True");
			}
		}
	}
	return false;
	console.log("false");
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

/**
 *
 * @param a
 * @param b
 *
 * array1 ==> obj {
 *   a: true,
 *   b: true,
 *   c: true,
 *   x: true
 * }
 * array2[index] === obj.properties
 */

// Better solution
// Time O(n) || Space O(n)
const betterStringCheck = (a, b) => {
	// loop through first array and create object
	// where properties === items in the array
	let map = {}
	for (let i = 0; i < a.length; i++){
		if(!map[a[1]]){
			const item = a[i];
			map[item] = true;
		}
	}
	console.log(map)
	// loop through second array and check if item in second array exists on created object.
	// in second array exists on created object.

	for(let j = 0; j < b.length; j++){
		if(map[b[j]]){
			return true;
		}
	}
	return false;
}

//least code solution O(n) Time Complexity
const simpleStringCheck = (a, b) => {
	return a.some(item => b.includes(item))
}

// stringCheck(array1, array2);
// betterStringCheck(array1, array2);
simpleStringCheck(array1, array2);
