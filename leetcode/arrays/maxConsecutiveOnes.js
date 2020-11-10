/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLength =0;
    let count =0;
    for(let i =0; i<nums.length; i++){
        if(nums[i]===0){
            count=0;
        } else {
            count++;
        }
        maxLength = maxLength < count?count:maxLength;
    }
    return maxLength;
};

const input = [1,1,0,1,1,1];

findMaxConsecutiveOnes(input);
