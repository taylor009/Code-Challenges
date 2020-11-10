/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if(nums.length === 0) return 0;
    var l =0; r = nums.length-1;
    if(nums[r] < target) return r+1;
    while(l<r){
        var mid = Math.floor((r + l)/2);
        if(nums[mid] < target) l = mid + 1;
        else r = mid;
    }
    return l;
};

const arr = [1,3,5,6];
const target = 7;

searchInsert(arr, target)
