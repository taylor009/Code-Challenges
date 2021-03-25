/**
 * @param {number} x
 * @return {boolean}
 *
 * Time O(n) | Space O(n)
 *
 *
 */
let isPalindrome = function (x) {
    let str = x + "";
    return str === str.split('').reverse().join('');
};