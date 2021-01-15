/**
 * 1.Iterate left to right to find N1 candidates (the smallest #)
 * 2.Create a stack for N2 candidates, the top number will be the smallest potential N2
 * 3.Iterate the array from the right for N3
 * 4.For N2 stack,
 pop candidates that are smaller than N1
 push candidates that greater than N1 & smaller than the smallest N2 candidate
 * 5.Notice that the reason we can ensure the N2 stack is sorted such that the top value will always be smallest is
 * because we are only pushing in values that is smaller than the smallest N2 value.
 * A smallest N2 possible gives us the best possibility of forming a 132 pattern.
 * If given the smallest N2, we still can't find a 132 pattern, that means we have another smaller N2 candidate.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function (nums) {
    // sanity check
    if (nums.length < 3) return false;

    let N2 = []; // potential candidates, number 2
    let N1 = [nums[0]]; // the smallest number, number 3

    for (let i = 1; i < nums.length; i++) {
        N1.push(Math.min(N1[N1.length - 1], nums[i]));
    }

    for (let i = nums.length - 1; i >= 0; i--) { // number 3
        if (nums[i] > N1[i]) {
            // remove useless N2 candidates
            while (N2.length != 0 && N2[N2.length - 1] <= N1[i]) N2.pop();
            // found a pattern
            if (N2.length != 0 && N2[N2.length - 1] < nums[i]) return true;
            N2.push(nums[i]);
        }
    }
    return false;
};