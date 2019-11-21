import numpy as np

n, m, p = map(int, input().strip().split())
arr = np.array(input().strip().split(), int)
for i in range(1, n + m):
    arr = np.vstack((arr, np.array(input().strip().split(), int)))
print(arr)
