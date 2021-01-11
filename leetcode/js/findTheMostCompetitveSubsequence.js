/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
    if(k === nums.length){
        return nums;
    }

    const L = nums.length;
    let list = nums.slice(L-k, L);

    let peek = 0;

    while(peek < k-1 && list[peek] <= list[peek+1])
        peek++;

    for(let i = L-k-1; i >= 0; i--) {
        if (nums[i] > list[0])
            continue;

        list.splice(peek, 1);
        list.splice(0, 0, nums[i]);

        while(peek < k-1 && list[peek] <= list[peek+1])
            peek++;
    }

    return list;
};

mostCompetitive([3,5,2,6], 2)