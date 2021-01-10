/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let result = '';
    for(let i =0; i < s.length; i++){
        bubble(i, i); // odd palindrome
        bubble(i, i+1); //even palindrome
    }

    function bubble(left, right){
        while(left >= 0 && s[left] === s[right]) {
            left--;
            right++;
        }
        left++;
        right--;

        if(result.length < right-left+1){
            result = s.slice(left, right+1)
        }
    }
    return result;
};


longestPalindrome("babad")

// bab