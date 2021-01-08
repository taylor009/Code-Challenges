//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
	if(str === ""){
		return "";
	} else {
		return reverseString(str.substr(1)) + str.charAt(0);
	}
}

function reverseStringIteration(str){
	let arrayStr = str.split("");
	let reversedArray = [];

	function addToArray(array){
		if(array.length > 0) {
			reversedArray.push(array.pop());
			addToArray(array)
		}
		return;
	}
	addToArray(arrayStr);
	return reversedArray.join("");
}

reverseString('yoyo mastery')
reverseStringIteration('yoyo mastery')
//should return: 'yretsam oyoy'
