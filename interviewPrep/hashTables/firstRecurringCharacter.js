/**
 * Google Question
 * Given an array = [2,5,1,2,3,5,1,2,4]:
 * It should return 2
 *
 * Given an array = [2,1,1,2,3,5,1,2,4]:
 * It should return 1
 *
 * Given an array = [2,3,4,5]:
 * It should return undefined
 **/

function firstRecurringCharacter(array){
	if(array.length === 0){
		return 'No array present';
	}
	for(let i = 0; i < array.length; i++){
		let num1 = array[i]
		for(let j = i + 1; j< array.length; j++){
			let num2 = array[j]
			if(num1 === num2){
				console.log('true');
				return true;
				break;
			}
			console.log('undefinded')
			return false;
		}
	}
}

function firstRecurringCharacter2(input){
	let map = {};
	for (let i =0; i < inputs.length; i++){
		if(map[input[i]]){
			return input[i]
		} else {
			map[input[i]] = i
		}
	}
	return undefined;
}

const array1 = [2,5,1,2,3,5,1,2,4];
const array2 = [2,3,4,5];

firstRecurringCharacter(array1);

firstRecurringCharacter2(array2);
