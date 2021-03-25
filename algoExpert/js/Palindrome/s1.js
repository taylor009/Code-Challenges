
// Time O(n^2) | Space O(n)
function isPalindrome(string){
    let reverseString = '';

    for(let i = string.length - 1; i >= 0; i--){
        reverseString += string[i];
    }
    return string === reverseString;
}