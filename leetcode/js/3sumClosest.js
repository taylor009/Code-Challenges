/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let sum = null;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const _sum = nums[i] + nums[j] + nums[k];
                if (sum === null) sum = _sum;
                else if (Math.abs(_sum - target)< Math.abs(sum - target)) sum = _sum;
                else if (_sum > sum) break;
            }
        }
    }

    return sum;
};