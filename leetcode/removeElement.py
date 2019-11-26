# nums = [3, 2, 2, 3]
# val = 3
#
# nums = list(filter(lambda x: x != val, nums))
#
# print(len(nums))
# print(nums)


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if nums:
            while len(nums) > 0 and nums[0] == val: nums.pop(0)
            for i in range(len(nums)):
                while i < (len(nums) - 1) and (nums[i + 1] == val): nums.pop(i + 1)
        return len(nums)
