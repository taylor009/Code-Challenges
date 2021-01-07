/**
 * Palindromes
A palindrome is a word, number, phrase, or another sequence of characters which
reads the same backward as forward, such as madam, racecar, or the number

What is the sum of all numeric palindromes that are less than 10,000?
 **/

const sumOfPalindromes = n => {
	let x = 0;
	for (let i = 0; i <= n; i++) {
		i == ('' + i).split('').reverse().join('') && (x += i);
	}
	return x
};

console.log(sumOfPalindromes(10000));

//545040
