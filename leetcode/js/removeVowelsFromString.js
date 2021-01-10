/**
 * @param {string} s
 * @return {string}
 */
const removeVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return s.split('').filter(s => !vowels.includes(s)).join('');
};

removeVowels("leetcodeisacommunityforcoders");

// result should be Output: "ltcdscmmntyfrcdrs"