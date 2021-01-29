/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num <= 9 || num === null) {
        return num;
    }
    if(num % 9 == 0){
        return 9;
    }
    return num % 9;
};