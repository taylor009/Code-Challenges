/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    let length = needle.length;
    for (let i=0; i<=haystack.length-length; i++) {
        if (haystack.slice(i, i+length) === needle) {
            return i;
        }
    }
    return -1;
}