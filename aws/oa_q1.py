# amcatID: 23280666284421
# testID: 23280666284421

# def numberAmazonGoStores(rows, column, grid):
    # rows = []
    # column =
    # pass

# class Solution:
#     def numIslands(self, grid):
#         """
#         :type grid: List[List[str]]
#         :rtype: int
#         """
#         rowS = []
#         colS = []
#         islands = 0
#         for i in range(0, len(grid)):
#             for j in range(0, len(grid[0])):
#                 if grid[i][j] == '1':
#                     rowS.append(i)
#                     colS.append(j)
#                     grid[i][j] = '0'
#                     while len(rowS) != 0 and len(colS) != 0:
#                         row = rowS.pop()
#                         col = colS.pop()
#                         if row + 1 < len(grid) and grid[row + 1][col] == '1':
#                             grid[row + 1][col] = '0'
#                             rowS.append(row + 1)
#                             colS.append(col)
#                         if row - 1 >= 0 and grid[row - 1][col] == '1':
#                             grid[row - 1][col] = '0'
#                             rowS.append(row - 1)
#                             colS.append(col)
#                         if col + 1 < len(grid[0]) and grid[row][col + 1] == '1':
#                             grid[row][col + 1] = '0'
#                             rowS.append(row)
#                             colS.append(col + 1)
#                         if col - 1 >= 0 and grid[row][col - 1] == '1':
#                             grid[row][col - 1] = '0'
#                             rowS.append(row)
#                             colS.append(col - 1)
#                     islands += 1
#         return islands
