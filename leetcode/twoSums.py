

nums = [2, 7, 11, 15]
target = 9


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        r = []

        for i in range(len(nums)):
            temp = target - nums[i]
            if temp in r:
                return [i, nums.index(temp)]

            r.append(nums[i])
