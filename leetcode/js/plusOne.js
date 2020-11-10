/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;

    for(let i = len-1; i>=0; i--){
        // increase the last digit by 1
        digits[i]++

        /**
         * if after increment last digit becomes 10
         *  then make it 0 and in the next iteration, second last digit
         *  will be increased by 1
         */
        if(digits[i] > 9){
            digits[i]=0;
        } else {
            return digits
        }
    }

    /**
     * This is for special cases when all digits are 9 e.g [9, 9, 9] and
     * output should be [1, 0, 0, 0]. So, above for loop will make all digits 0
     * and unshift method will add 1 in the start of the array.
     */
    digits.unshift(1);

    return digits;
};
