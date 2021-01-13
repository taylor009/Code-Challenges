function twoNumberSum(array, targetSum) {
    const nums = {} // create hash table

    //iterate of array checking hash table and if the sum doesn't match then adds it to the hash
    for(const num of array) {
        const potentialMatch = targetSum - num
        if(potentialMatch in nums){
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
