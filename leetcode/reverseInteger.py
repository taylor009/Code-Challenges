x = 123


class Solution:
    def reverse(self, x: int) -> int:
        range_32 = range(-2 ** 31, 2 ** 31 - 1)
        if x not in range_32:
            final = 0
        elif x < 0:
            final = -1 * int(str(x)[::-1][:-1])
        else:
            final = int(str(x)[::-1])
        return final if final in range_32 else 0
