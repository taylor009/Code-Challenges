/**
 * Create a function that reverses a string:
 * 'Hi name is Andrei' should be:
 * 'ierdnA si eman yM iH'
 **/

function reverse(str){
	// check input
	if(!str || str.length < 2 || typeof str !== 'string'){
		return 'bad input';
	}

	const backwords = [];
	const totalItems = str.length - 1;
	for(let i = totalItems; i >= 0; i--){
		backwords.push(str[i]);
	}
	console.log(backwords.join(''))
	return backwords.join('');
}

function reverse2(str){
	return str.split('').reverse().join('');
}

const s = 'Hi name is Andrei';

reverse(s);
reverse2(s)
