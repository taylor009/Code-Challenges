# nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
# nums = [1, 1, 2]


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return -1
        current_number = nums[0]
        count = 1
        for nums_index in range(len(nums)):
            if current_number != nums[nums_index]:
                current_number = nums[count] = nums[nums_index]
                count += 1
        return count

