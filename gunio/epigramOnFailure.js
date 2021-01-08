function sum(string) {
	const VOWELS = ["a", "e", "i", "o", "u"];
	return (
		string
		.replace(/[^a-zA-Z]*/g, "")
		.split("")
		.reduce((acc, char, array) => {
			return acc + char.charCodeAt(0) * (isVowel() ? -1 : 1);

			function isVowel() {
				return VOWELS.includes(char);
			}
		}, 0)
	);
}

require("assert").equal(sum("iffy"), 220);

console.log(
	sum(
		"Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve."
	)
);
