def findgcd(x, y):
    while (y):
        x, y = y, x % y
    return x


def generalizedGCD(num, arr):
    # WRITE YOUR CODE HER
    l = arr
    num1 = l[0]
    num2 = l[1]
    gcd = findgcd(num1, num2)
    for i in range(num, len(l)):
        gcd = findgcd(gcd, l[i])
    pass

#
# num = int(input())
#
# l = [2, 4, 6, 8, 10]
# num1 = l[0]
# num2 = l[1]
# gcd = findgcd(num1, num2)
# for i in range(num, len(l)):
#     gcd = findgcd(gcd, l[i])
# print("gcd is: ", gcd)
