class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if len(grid) == 0 or len(grid[0]) == 0:
            return -1

        if grid[0][0] == 1:
            return -1

        if grid[-1][-1] == 1:
            return -1

        m, n = len(grid), len(grid[0])

        steps = [(-1, -1),
                 (-1, 0),
                 (-1, 1),
                 (0, -1),
                 (0, 1),
                 (1, -1),
                 (1, 0),
                 (1, 1)]

        deque = collections.deque([(0, 0, 1)])

        while deque:
            for i in range(len(deque)):
                row, col, path = deque.popleft()

                if row == m - 1 and col == n - 1:
                    return path

                for i, j in steps:
                    i += row
                    j += col

                    if (i < 0 or i >= m or
                            j < 0 or j >= n or
                            grid[i][j] == 1):
                        continue

                    grid[i][j] = 1
                    deque.append((i, j, path + 1))

        return -1
