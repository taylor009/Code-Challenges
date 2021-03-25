
// Time O(n) | Space O(1)
function isPalindrome(string){
    let leftIdx = 0;
    let rightIdx = string.length - 1;

    while(leftIdx < rightIdx) {
        if(string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}