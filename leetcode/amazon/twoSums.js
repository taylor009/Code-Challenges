
let nums = [2, 7, 11, 15];
let target = 9;


const twoSum = (nums, target) => {
    let numObject = {};
    for (let i = 0; i < nums.length; i++) {
        let thisNum = nums[i];
        numObject[thisNum] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
};