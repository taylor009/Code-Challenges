/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    let str = x + "";
    return str === str.split('').reverse().join('');
};