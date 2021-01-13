/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    let num,
        apart = Infinity;
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for(let j = i + 1, k = nums.length - 1; j < k;){
            let sum = nums[i] + nums[j] + nums[k];
            let diff = sum -target;
            if(diff === 0) {
                return sum;
            }
            if(Math.abs(diff) < Math.abs(apart)) {
                apart = diff;
                num = sum;
            }
            if(diff < 0){
                j++;
            } else {
                k--;
            }
            while(j > i + 1 && j < k && nums[j] == nums[j - 1]){
                j++;
            }
            while(k < nums.length - 1 && j < k && nums[k] == nums[k + 1]){
                k--;
            }
        }
    }
    return num;
};