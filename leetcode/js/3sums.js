/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    for (let indexA = 0; indexA < nums.length - 2; indexA++) {
        const a = nums[indexA];

        if (a > 0) return result;
        if (a === nums[indexA - 1]) continue;

        let indexB = indexA + 1;
        let indexC = nums.length - 1;

        // Now check if sum is zero, and if NOT, then run the next set of 2 if loop to update indexB and indexC
        while (indexB < indexC) {
            const b = nums[indexB];
            const c = nums[indexC];

            if ((a + b + c) === 0) {
                result.push([a, b, c]);
            }

            // Now with the below 2 if functions, I am just implementing how the indexB and indexC will be incremented and decremented with each iteration and gets feeded back to the above while function ( while (indexB < indexC ))

            if ((a + b + c) >= 0) {
                while (nums[indexC - 1] === c) {
                    indexC--;
                } // This is equivalent to continue in my previous implementation
                indexC--;
            }

            if ((a + b + c) <= 0) {
                while (nums[indexB + 1] === b) {
                    indexB++
                } // This is equivalent to continue in my previous implementation
                indexB++
            }
        }
    }
    return result;
};