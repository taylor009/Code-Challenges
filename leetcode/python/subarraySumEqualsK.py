# Time O(n) | Space O(1)
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = total_sum = 0
        sums = Counter([0])

        for num in nums:
            total_sum += num
            count += sums[total_sum - k]
            sums[total_sum] += 1
        return count